// HAMSTER BANNER - VERSION FIXED_ANIMATIONS_V2

function initHamsterBanner() {
    // --- ELEMENT SELECTION ---
    const container = document.getElementById('hamsterBannerContainer');
    const hamsterLayer = document.getElementById('bannerHamstersContainer');
    const catContainer = document.getElementById('bannerCat');

    if (!container || !hamsterLayer || !catContainer) {
        console.error("Hamster Banner: Missing required DOM elements (hamsterBannerContainer, bannerHamstersContainer, or bannerCat).");
        return;
    }

    // --- DYNAMIC FLOOR CREATION ---
    let floor = container.querySelector('.hamster-floor');
    if (!floor) {
        floor = document.createElement('div');
        floor.className = 'hamster-floor';
        floor.style.position = 'absolute';
        floor.style.bottom = '0';
        floor.style.left = '0';
        floor.style.width = '100%';
        floor.style.height = '56px'; // Match cat offset (h-14)
        floor.style.backgroundColor = '#ecfdf5'; // HEX for bg-emerald-50
        floor.style.borderTop = '1px solid rgba(16, 185, 129, 0.3)'; // HEX for emerald-500 with opacity
        floor.style.pointerEvents = 'none';
        floor.style.zIndex = '10'; // Above cat (z-0), below hamsters (z-20+)
        container.appendChild(floor);
    }

    // --- INITIALIZE CAT STATE (PREVENT SLIDE-IN BUG) ---
    catContainer.style.transform = 'translate(-50%, 100%)'; 
    catContainer.style.bottom = '56px';
    catContainer.style.transition = 'none'; 
    catContainer.style.left = '50%';
    void catContainer.offsetWidth; 

    // --- CONFIGURATION (HEX COLORS) ---
    const CONSTANTS = {
        MAX_HAMSTERS: 12,
        MIN_HAMSTERS: 4,
        SPAWN_LEFT_X: -15,
        SPAWN_RIGHT_X: 115,
        SPAWN_RATE: 0.015,
        // BACKUP ORIGINALE: ['#f97316', '#d97706', '#78716c', '#a1a1aa', '#854d0e', '#475569']
        HAMSTER_COLORS: [
            '#f97316', '#d97706', '#78716c', '#a1a1aa', '#854d0e', '#475569',
            '#fbbf24', '#1c1917', '#fecaca', '#92400e'
        ],
        // BACKUP ORIGINALE: MIN_SPEED: 0.03, MAX_SPEED: 0.12
        MIN_SPEED: 0.02,
        MAX_SPEED: 0.18,
        TURN_SPEED: 5,
        WALK_CYCLE_SPEED: 0.4,
        GRAVITY: 0.8,
        TERMINAL_VELOCITY: 20,
        LANDING_DURATION: 60
    };

    // --- STATE MANAGEMENT ---
    let hamsters = [];
    let nextId = 0;
    let draggedId = null;
    
    const mouse = { x: 0, y: 0, vx: 0, vy: 0, isDown: false, lastX: 0, lastY: 0 };
    const predator = { active: false, x: 50 };
    let catState = { visible: false, look: 'center', x: 50 };

    // --- HELPER FUNCTIONS ---
    const getRandomColor = () => CONSTANTS.HAMSTER_COLORS[Math.floor(Math.random() * CONSTANTS.HAMSTER_COLORS.length)];
    const normalizeAngle = (angle) => (angle + 3600) % 360;
    const angleDifference = (current, target) => {
        const diff = (target - current + 180) % 360 - 180;
        return diff < -180 ? diff + 360 : diff;
    };

    function createHamster(startLeft) {
        const startAngle = startLeft ? 0 : 180;
        return {
            id: nextId++,
            x: startLeft ? CONSTANTS.SPAWN_LEFT_X : CONSTANTS.SPAWN_RIGHT_X,
            y: Math.random() * 25,
            altitude: 0,
            velocityY: 0,
            velocityX: 0,
            speed: 0,
            targetSpeed: CONSTANTS.MIN_SPEED + Math.random() * (CONSTANTS.MAX_SPEED - CONSTANTS.MIN_SPEED),
            angle: startAngle,
            targetAngle: startAngle,
            color: getRandomColor(),
            state: 'WALKING',
            fallingPose: 'PANIC',
            landingEffect: 'NONE',
            scale: 0.75 + Math.random() * 0.3,
            stateTimer: 100 + Math.random() * 300,
            walkFrame: Math.random() * 100,
            fatness: 0.9 + Math.random() * 0.2
        };
    }

    // --- LOGIC ENGINE ---
    function updateLogic() {
        let newHamsters = [...hamsters];

        // Spawn
        if (!predator.active) {
            if (newHamsters.length < CONSTANTS.MIN_HAMSTERS || (newHamsters.length < CONSTANTS.MAX_HAMSTERS && Math.random() < CONSTANTS.SPAWN_RATE)) {
                const rightFacingCount = newHamsters.filter(h => Math.abs(h.angle - 0) < 90).length;
                const leftFacingCount = newHamsters.length - rightFacingCount;
                let startLeft = Math.random() > 0.5;
                if (rightFacingCount < 2) startLeft = true;
                if (leftFacingCount < 2) startLeft = false;
                newHamsters.push(createHamster(startLeft));
            }
        }

        // Update Individual
        newHamsters = newHamsters.map(h => {
            let next = { ...h };
            const isBeingDragged = next.id === draggedId;

            if (isBeingDragged) {
                next.state = 'DRAGGED';
                next.x = mouse.x;
                const GRAB_OFFSET = 40;
                next.altitude = Math.max(0, mouse.y - next.y - GRAB_OFFSET);
                next.walkFrame += 1.5;
                if (Math.abs(mouse.vx) > 0.1) {
                    next.targetAngle = mouse.vx > 0 ? 0 : 180;
                    next.angle = next.targetAngle;
                }
                next.stateTimer = 0; next.velocityY = 0; next.velocityX = 0;
                return next;
            }

            // DRAG RELEASE -> START FALLING
            if (next.state === 'DRAGGED' && !isBeingDragged) {
                next.state = 'FALLING';
                next.velocityY = mouse.vy * 1.5;
                next.velocityX = mouse.vx * 0.5;
                
                const rand = Math.random();
                if (rand < 0.25) next.fallingPose = 'PANIC';
                else if (rand < 0.50) next.fallingPose = 'SKYDIVE';
                else if (rand < 0.75) next.fallingPose = 'TUCK';
                else next.fallingPose = 'GLASS';
            }

            if (next.state === 'FALLING') {
                // Custom Physics for Poses
                let gravity = CONSTANTS.GRAVITY;
                let drag = 0.95;

                // Skydive and Glass fall slower (air resistance)
                if (next.fallingPose === 'SKYDIVE' || next.fallingPose === 'GLASS') {
                    gravity = CONSTANTS.GRAVITY * 0.3; // Low gravity
                    drag = 0.90; // High drag
                }

                next.velocityY -= gravity;
                if (next.velocityY < -CONSTANTS.TERMINAL_VELOCITY) next.velocityY = -CONSTANTS.TERMINAL_VELOCITY;
                
                next.altitude += next.velocityY;
                next.x += next.velocityX;
                next.velocityX *= drag;

                if (next.fallingPose === 'PANIC') next.walkFrame += 1.2;
                else if (next.fallingPose === 'SKYDIVE') next.walkFrame += 0.2;
                else next.walkFrame += 0.5;

                if (next.altitude <= 0) {
                    next.altitude = 0; next.velocityY = 0; next.velocityX = 0;
                    next.state = 'LANDING';
                    next.stateTimer = CONSTANTS.LANDING_DURATION;
                    const randEffect = Math.random();
                    if (randEffect < 0.25) next.landingEffect = 'STARS';
                    else if (randEffect < 0.5) next.landingEffect = 'CLOUD';
                    else if (randEffect < 0.75) next.landingEffect = 'BOUNCE';
                    else next.landingEffect = 'PROTEST';
                }
                return next;
            }

            if (next.state === 'LANDING') {
                next.stateTimer--;
                next.speed = 0;
                if (next.stateTimer <= 0) {
                    next.state = 'IDLE';
                    next.stateTimer = 30;
                    next.landingEffect = 'NONE';
                }
                return next;
            }

            if (predator.active && next.state !== 'FLEEING' && next.altitude <= 0) {
                next.state = 'FLEEING';
                if (next.x < predator.x) next.targetAngle = 180; else next.targetAngle = 0;
                next.targetSpeed = CONSTANTS.MAX_SPEED * 4.5;
            }

            if (next.altitude <= 0) {
                next.altitude = 0;
                next.stateTimer--;

                if (next.state !== 'FLEEING') {
                    if (next.stateTimer <= 0) {
                        const roll = Math.random();
                        if (next.state === 'WALKING') {
                            next.state = roll > 0.4 ? 'IDLE' : 'SNIFFING';
                            next.stateTimer = 60 + Math.random() * 120;
                            next.targetSpeed = 0;
                            if (Math.random() > 0.5) next.targetAngle = 90;
                        } else if (next.state === 'IDLE' || next.state === 'SNIFFING') {
                            next.state = 'WALKING';
                            next.stateTimer = 200 + Math.random() * 400;
                            if (Math.random() > 0.7) next.targetAngle = Math.abs(next.angle - 0) < 90 ? 180 : 0;
                            else next.targetAngle = Math.abs(next.angle - 0) < 90 ? 0 : 180;
                            next.targetSpeed = CONSTANTS.MIN_SPEED + Math.random() * (CONSTANTS.MAX_SPEED - CONSTANTS.MIN_SPEED);
                        }
                    }
                } else {
                    if (next.x < predator.x) next.targetAngle = 180; else next.targetAngle = 0;
                    next.targetSpeed = CONSTANTS.MAX_SPEED * 4.5;
                    if (!predator.active) {
                        next.state = 'WALKING'; next.targetSpeed = CONSTANTS.MIN_SPEED;
                    }
                }

                if (next.angle !== next.targetAngle) {
                    const diff = angleDifference(next.angle, next.targetAngle);
                    const turnRate = next.state === 'FLEEING' ? CONSTANTS.TURN_SPEED * 3 : CONSTANTS.TURN_SPEED;
                    if (Math.abs(diff) < turnRate) next.angle = next.targetAngle;
                    else next.angle += Math.sign(diff) * turnRate;
                    next.angle = normalizeAngle(next.angle);
                }

                const accel = next.state === 'FLEEING' ? 0.02 : 0.005;
                if (next.speed < next.targetSpeed) next.speed += accel;
                if (next.speed > next.targetSpeed) next.speed -= accel;
                if (Math.abs(next.speed - next.targetSpeed) < 0.005) next.speed = next.targetSpeed;

                const rads = (next.angle * Math.PI) / 180;
                next.x += Math.cos(rads) * next.speed;

                if (next.speed > 0.01) next.walkFrame += CONSTANTS.WALK_CYCLE_SPEED + (next.speed * 2);
                else next.walkFrame = Math.round(next.walkFrame);
            }
            return next;
        });

        hamsters = newHamsters.filter(h => {
            if (h.state === 'DRAGGED') return true;
            if (h.x < CONSTANTS.SPAWN_LEFT_X - 30) return false;
            if (h.x > CONSTANTS.SPAWN_RIGHT_X + 30) return false;
            return true;
        });
    }

    // --- RENDERER ---
    function getHamsterSVG(h) {
        const rad = (h.angle * Math.PI) / 180;
        const faceDirX = Math.cos(rad);
        const faceDepth = Math.sin(rad);
        const isFacingBack = faceDepth < -0.3;
        const faceShiftX = faceDirX * 14; 
        const tailShiftX = -faceShiftX * 1.15;
        
        const isSniffing = h.state === 'SNIFFING';
        const isFalling = h.state === 'FALLING';
        const isLanding = h.state === 'LANDING';
        const isFleeing = h.state === 'FLEEING';
        const isDragging = h.state === 'DRAGGED';

        let legSwing = Math.sin(h.walkFrame) * 6;
        let legOffset = Math.cos(h.walkFrame) * 3;
        let armSwing = 0;
        let bodyYOffset = 0;
        let bodyScaleY = 1;
        let bodyScaleX = 1;

        // --- ANIMATION TRANSFORMS ---
        if (isFalling || isDragging || isFleeing) {
            if (isDragging || h.fallingPose === 'PANIC' || isFleeing) {
                const swingSpeed = isFleeing ? 2.5 : 1.5;
                const swingAmp = isFleeing ? 10 : 8;
                legSwing = Math.sin(h.walkFrame * swingSpeed) * swingAmp;
                legOffset = Math.cos(h.walkFrame * swingSpeed) * (swingAmp * 0.6);
                armSwing = Math.sin(h.walkFrame * (swingSpeed + 0.5)) * 5;
                bodyYOffset = -2;
                if (isFleeing) bodyYOffset = Math.abs(Math.sin(h.walkFrame)) * -4;
            } else if (h.fallingPose === 'SKYDIVE') {
                legSwing = 10; legOffset = 0; armSwing = -8; bodyScaleX = 1.1; bodyScaleY = 0.9;
            } else if (h.fallingPose === 'TUCK') {
                legSwing = 0; legOffset = 0; armSwing = 0; bodyScaleY = 0.9; bodyScaleX = 0.95;
                bodyYOffset = Math.sin(h.walkFrame) * 2;
            } else if (h.fallingPose === 'GLASS') {
                legSwing = 12; legOffset = 5; armSwing = -15; bodyScaleX = 1.2; bodyScaleY = 0.9; bodyYOffset = 0;
            }
        }

        if (isLanding) {
            if (h.landingEffect === 'BOUNCE') {
                const elapsed = CONSTANTS.LANDING_DURATION - h.stateTimer;
                if (elapsed < 25) {
                    const t = elapsed / 25;
                    bodyYOffset = -Math.sin(t * Math.PI) * 45;
                    if (t < 0.2) {
                        const squash = 1 - (t / 0.2);
                        bodyScaleY = 1 - squash * 0.3; bodyScaleX = 1 + squash * 0.3; bodyYOffset += squash * 5;
                    } else if (t > 0.4 && t < 0.6) { bodyScaleY = 1.1; bodyScaleX = 0.9; }
                } else if (elapsed >= 25 && elapsed < 45) {
                    const t = (elapsed - 25) / 20;
                    bodyYOffset = -Math.sin(t * Math.PI) * 15;
                    if (t < 0.25) {
                        const squash = 1 - (t / 0.25);
                        bodyScaleY = 1 - squash * 0.15; bodyScaleX = 1 + squash * 0.15;
                    }
                }
            } else if (h.landingEffect === 'PROTEST') {
                bodyScaleY = 1.15; bodyScaleX = 0.9; bodyYOffset = -5; legSwing = 0; legOffset = 0;
            } else if (h.landingEffect === 'CLOUD') {
                if (CONSTANTS.LANDING_DURATION - h.stateTimer < 10) { bodyScaleY = 0.8; bodyScaleX = 1.2; bodyYOffset = 5; }
            }
        }

        const sniffWiggle = isSniffing ? Math.sin(Date.now() / 40) * 1.5 : 0;
        const sniffY = isSniffing ? Math.abs(Math.sin(Date.now() / 60)) * 2 : 0;
        
        const isPanicFace = (isFalling && h.fallingPose === 'PANIC') || isFleeing;
        const isTuckFace = isFalling && h.fallingPose === 'TUCK';
        const isGlassFace = isFalling && h.fallingPose === 'GLASS';

        let svg = `<svg viewBox="0 0 100 100" fill="${h.color}" style="width:100%; height:100%; overflow:visible; transform-origin: bottom center; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1));">
            <g transform="translate(0, ${bodyYOffset}) scale(${bodyScaleX}, ${bodyScaleY})">`;

        // --- BACK LEGS (Standard) ---
        // CRITICAL FIX: Only show standard legs if NOT falling in a special pose.
        // Previously this was overlapping with SkyDive/Glass legs.
        if ((!isFalling || h.fallingPose === 'PANIC') && h.fallingPose !== 'TUCK') {
            svg += `<g><ellipse cx="${50 + (faceDirX * -10) + legSwing}" cy="85" rx="6" ry="4" fill="${h.color}" style="filter: brightness(0.75)" />
                    <ellipse cx="${50 + (faceDirX * 10) - legSwing}" cy="88" rx="6" ry="4" fill="${h.color}" style="filter: brightness(0.75)" /></g>`;
        }
        
        // --- TAIL (Back) ---
        if (!isFacingBack && h.fallingPose !== 'TUCK' && h.fallingPose !== 'GLASS') svg += `<circle cx="${50 + tailShiftX}" cy="76" r="5" fill="#fbcfe8" />`;
        
        // --- BODY ---
        svg += `<ellipse cx="50" cy="65" rx="${30 * h.fatness}" ry="${28 - (Math.abs(legSwing) * 0.1)}" />`;
        
        // --- TAIL (Front) ---
        if (isFacingBack && h.fallingPose !== 'TUCK') svg += `<circle cx="${50 + tailShiftX}" cy="72" r="5" fill="#fbcfe8" stroke="rgba(0,0,0,0.1)" stroke-width="1" />`;

        // --- ARMS ---
        if (isLanding && h.landingEffect === 'PROTEST' && !isFacingBack) {
            svg += `<g stroke="#333" stroke-width="2" fill="none"><path d="M35,70 L45,60 L55,70" /><path d="M65,70 L55,60 L45,70" /></g>`;
        }

        if ((isFalling || isDragging || isFleeing) && h.fallingPose !== 'TUCK' && h.fallingPose !== 'GLASS' && !isFacingBack) {
            svg += `<g stroke="#333" stroke-width="2" fill="none"><path d="M35,${65 + armSwing} L25,${55 + armSwing}" /><path d="M65,${65 - armSwing} L75,${55 - armSwing}" /></g>`;
        }

        // GLASS ARMS
        if (isFalling && h.fallingPose === 'GLASS' && !isFacingBack) {
             svg += `<g stroke="#333" stroke-width="2" fill="none">
                <path d="M30,50 L25,40" /> 
                <circle cx="25" cy="38" r="2.5" fill="#fbcfe8" stroke="none" />
                <path d="M70,50 L75,40" /> 
                <circle cx="75" cy="38" r="2.5" fill="#fbcfe8" stroke="none" />
             </g>`;
        }

        // --- HEAD & FACE ---
        const shouldShowFace = !isFacingBack && (!isFalling || h.fallingPose !== 'TUCK' || Math.sin(h.walkFrame) > 0);
        
        if (shouldShowFace) {
            svg += `<g transform="translate(${faceShiftX}, ${sniffY})">
                    <circle cx="${50 - (12 * (1 - Math.abs(faceDirX) * 0.4))}" cy="45" r="7" fill="${h.color}" style="filter: brightness(0.9)" />
                    <circle cx="${50 + (12 * (1 - Math.abs(faceDirX) * 0.4))}" cy="45" r="7" fill="${h.color}" style="filter: brightness(0.9)" />
                    <ellipse cx="50" cy="65" rx="13" ry="11" fill="${h.color}" style="filter: brightness(1.1); opacity: 0.4" />`;
            
            if (isPanicFace) {
                    svg += `<g><circle cx="44" cy="58" r="4.5" fill="#fff" /><circle cx="44" cy="58" r="2" fill="#000" />
                            <circle cx="56" cy="58" r="4.5" fill="#fff" /><circle cx="56" cy="58" r="2" fill="#000" />
                            <circle cx="50" cy="72" r="4" fill="#f472b6" /></g>`;
            } else if (isTuckFace) {
                    svg += `<g><path d="M42,60 Q45,62 48,60" stroke="#1a1a1a" stroke-width="2" fill="none" />
                            <path d="M52,60 Q55,62 58,60" stroke="#1a1a1a" stroke-width="2" fill="none" />
                            <path d="M47,68 Q50,71 53,68" stroke="#f472b6" stroke-width="2.5" fill="none" stroke-linecap="round" /></g>`;
            } else if (isGlassFace) {
                    svg += `<g>
                       <circle cx="44" cy="58" r="3.5" fill="#1a1a1a" />
                       <circle cx="56" cy="58" r="3.5" fill="#1a1a1a" />
                       <circle cx="50" cy="70" r="3" fill="#f472b6" />
                    </g>`;
            } else {
                    svg += `<g><circle cx="44" cy="60" r="3.5" fill="#1a1a1a" />
                            <circle cx="56" cy="60" r="3.5" fill="#1a1a1a" />
                            <path d="M47,${68 + sniffWiggle} Q50,${71 + sniffWiggle} 53,${68 + sniffWiggle}" stroke="#f472b6" stroke-width="2.5" fill="none" stroke-linecap="round" /></g>`;
            }

            svg += `<g stroke="#374151" stroke-width="1" fill="none" stroke-linecap="round">
                    <path d="M42,${68 + sniffWiggle} L25,${65 + (sniffWiggle * 2)}" />
                    <path d="M42,${71 + sniffWiggle} L25,${74 + (sniffWiggle * 2)}" />
                    <path d="M58,${68 + sniffWiggle} L75,${65 + (sniffWiggle * 2)}" />
                    <path d="M58,${71 + sniffWiggle} L75,${74 + (sniffWiggle * 2)}" /></g></g>`;
        }

        // --- FRONT LEGS ---
        if ((!isFalling || h.fallingPose === 'PANIC') && h.fallingPose !== 'GLASS') {
            svg += `<g><ellipse cx="${50 + (faceDirX * 15) + legSwing}" cy="90" rx="6" ry="3" fill="${h.color}" style="filter: brightness(0.9)" />
                    <ellipse cx="${50 + (faceDirX * -5) - legOffset}" cy="92" rx="6" ry="3" fill="${h.color}" style="filter: brightness(0.9)" /></g>`;
        }

        if (isFalling && h.fallingPose === 'SKYDIVE') {
            svg += `<g><ellipse cx="30" cy="80" rx="7" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(45, 30, 80)" />
                    <ellipse cx="70" cy="80" rx="7" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(-45, 70, 80)" />
                    <ellipse cx="30" cy="50" rx="7" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(-45, 30, 50)" />
                    <ellipse cx="70" cy="50" rx="7" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(45, 70, 50)" /></g>`;
        }
        
        // GLASS LEGS
        if (isFalling && h.fallingPose === 'GLASS') {
             svg += `<g>
               <ellipse cx="35" cy="90" rx="6" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(20, 35, 90)" />
               <ellipse cx="65" cy="90" rx="6" ry="4" fill="${h.color}" style="filter: brightness(0.9)" transform="rotate(-20, 65, 90)" />
             </g>`;
        }

        if (isFalling && h.fallingPose === 'TUCK') {
            svg += `<g><ellipse cx="40" cy="80" rx="5" ry="3" fill="${h.color}" style="filter: brightness(0.75)" /><ellipse cx="60" cy="80" rx="5" ry="3" fill="${h.color}" style="filter: brightness(0.75)" /></g>`;
        }

        svg += `</g></svg>`;
        return svg;
    }

    function render() {
        const existingIds = new Set(hamsters.map(h => h.id));
        Array.from(hamsterLayer.children).forEach(el => {
            if (el.className.includes('hamster') && !existingIds.has(parseInt(el.dataset.id))) {
                el.remove();
            }
        });

        hamsters.forEach(h => {
            let el = document.getElementById(`hamster-${h.id}`);
            if (!el) {
                el = document.createElement('div');
                el.id = `hamster-${h.id}`;
                el.dataset.id = h.id;
                el.className = "hamster";
                el.style.position = 'absolute';
                el.style.width = '64px';
                el.style.height = '64px';
                el.style.willChange = 'transform';
                el.style.userSelect = 'none';
                el.style.pointerEvents = 'auto';
                el.style.touchAction = 'auto';  // Allow page scroll - tap on hamster still works!
                el.onmousedown = (e) => { e.preventDefault(); e.stopPropagation(); draggedId = h.id; mouse.isDown = true; };

                // MOBILE: Simplified touch system - just tap to launch
                el.ontouchstart = (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Find the actual hamster in the current array
                    const currentHamster = hamsters.find(ham => ham.id === h.id);
                    if (!currentHamster || currentHamster.state === 'FALLING') return;

                    // Immediate launch on touch - no waiting, no slingshot
                    // Random upward launch with slight horizontal variation
                    const horizontalVariation = (Math.random() - 0.5) * 2; // -1 to 1
                    currentHamster.velocityX = horizontalVariation;
                    currentHamster.velocityY = 3 + Math.random() * 2; // 3 to 5 upward velocity
                    currentHamster.state = 'FALLING';
                    currentHamster.altitude = 10; // Start with some altitude

                    // Random falling pose
                    const rand = Math.random();
                    if (rand < 0.25) currentHamster.fallingPose = 'PANIC';
                    else if (rand < 0.50) currentHamster.fallingPose = 'SKYDIVE';
                    else if (rand < 0.75) currentHamster.fallingPose = 'TUCK';
                    else currentHamster.fallingPose = 'GLASS';
                };

                const shadow = document.createElement('div');
                shadow.className = 'hamster-shadow';
                shadow.style.position = 'absolute';
                shadow.style.left = '50%';
                shadow.style.backgroundColor = '#000';
                shadow.style.borderRadius = '9999px';
                shadow.style.width = '40px';
                shadow.style.height = '8px';
                shadow.style.filter = 'blur(2px)';
                shadow.style.pointerEvents = 'none';
                el.appendChild(shadow);

                const svgContainer = document.createElement('div');
                svgContainer.className = 'svg-content';
                svgContainer.style.width = '100%';
                svgContainer.style.height = '100%';
                el.appendChild(svgContainer);

                const effectsLayer = document.createElement('div');
                effectsLayer.className = 'effects-layer';
                effectsLayer.style.position = 'absolute';
                effectsLayer.style.inset = '0';
                effectsLayer.style.pointerEvents = 'none';
                el.appendChild(effectsLayer);
                
                hamsterLayer.appendChild(el);
            }

            const shadowOpacity = Math.max(0, 0.2 - (h.altitude / 400));
            const shadowScale = Math.max(0.2, 1 - (h.altitude / 200));
            
            el.style.left = `${h.x}%`;
            el.style.bottom = `${5 + h.y + h.altitude}px`;
            el.style.transform = `scale(${h.scale}) translateX(-50%)`; 
            el.style.zIndex = Math.floor(1000 - h.y) + (h.state === 'DRAGGED' ? 5000 : 0);
            el.style.cursor = h.state === 'DRAGGED' ? 'grabbing' : 'grab';

            const shadow = el.querySelector('.hamster-shadow');
            if (shadow) {
                shadow.style.bottom = `${-(h.altitude)}px`;
                shadow.style.opacity = shadowOpacity;
                shadow.style.transform = `translateX(-50%) scale(${shadowScale})`;
            }

            const effects = el.querySelector('.effects-layer');
            let effectsHTML = '';
            if (h.state === 'LANDING' && h.landingEffect === 'STARS') {
                effectsHTML = `<div style="position:absolute; top:-24px; left:0; width:100%; display:flex; justify-content:center; opacity:0.8;"><span style="color:#facc15; font-size:1.25rem;">★</span></div>`;
            } else if (h.state === 'LANDING' && h.landingEffect === 'CLOUD') {
                 effectsHTML = `<div style="position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:64px; height:32px;"><div style="position:absolute; bottom:0; left:8px; width:24px; height:24px; background:#fff; border-radius:50%; opacity:0.6;"></div></div>`;
            }
            if (effects.innerHTML !== effectsHTML) effects.innerHTML = effectsHTML;

            el.querySelector('.svg-content').innerHTML = getHamsterSVG(h);
        });

        const pupilX = catState.look === 'left' ? -6 : (catState.look === 'right' ? 6 : 0);
        catContainer.className = "banner-cat";
        catContainer.style.position = 'absolute';
        catContainer.style.width = '180px';
        catContainer.style.height = '135px';
        catContainer.style.pointerEvents = 'none';
        catContainer.style.zIndex = '0';
        catContainer.style.transition = 'transform 2000ms ease-in-out';
        catContainer.style.willChange = 'transform';
        catContainer.style.left = `${catState.x}%`;
        catContainer.style.transform = `translate(-50%, ${catState.visible ? '55px' : '100%'})`;
        catContainer.style.bottom = '56px';

        if (!catContainer.querySelector('svg')) {
             catContainer.innerHTML = `
             <svg viewBox="-30 0 260 160" style="width:100%; height:100%; overflow:visible;">
                <g>
                    <path d="M35,70 L15,5 L75,50 Z" fill="#374151" />
                    <path d="M165,70 L185,5 L125,50 Z" fill="#374151" />
                    <path d="M38,65 L22,20 L65,55 Z" fill="#fbcfe8" />
                    <path d="M162,65 L178,20 L135,55 Z" fill="#fbcfe8" />
                    <path d="M 35,70 Q 100,-15 165,70 Q 190,110 175,160 L 25,160 Q 10,110 35,70 Z" fill="#4b5563" />
                    <g transform="translate(0, 15)">
                        <ellipse cx="70" cy="80" rx="18" ry="18" fill="#fbbf24" stroke="#1f2937" stroke-width="2"/>
                        <ellipse cx="130" cy="80" rx="18" ry="18" fill="#fbbf24" stroke="#1f2937" stroke-width="2"/>
                        <g id="cat-pupils" style="transition: transform 500ms ease-out;">
                            <ellipse cx="70" cy="80" rx="3" ry="8" fill="#000" />
                            <ellipse cx="130" cy="80" rx="3" ry="8" fill="#000" />
                        </g>
                        <circle cx="75" cy="75" r="4" fill="#fff" opacity="0.8" />
                        <circle cx="135" cy="75" r="4" fill="#fff" opacity="0.8" />
                        <g stroke="#000" stroke-width="2" fill="none"><path d="M52,70 Q45,65 42,60" /><path d="M53,65 Q48,58 46,52" /><path d="M148,70 Q155,65 158,60" /><path d="M147,65 Q152,58 154,52" /></g>
                    </g>
                    <g transform="translate(0, 5)"><path d="M92,125 Q100,130 108,125" stroke="#000" stroke-width="2" fill="none" opacity="0.4" /><ellipse cx="100" cy="118" rx="4" ry="3" fill="#fbcfe8" /></g>
                    <g stroke="#374151" stroke-width="1.5" fill="none" opacity="0.6"><path d="M50,120 L20,115" /><path d="M50,125 L20,128" /><path d="M150,120 L180,115" /><path d="M150,125 L180,128" /></g>
                </g>
            </svg>`;
        }
        const pupils = document.getElementById('cat-pupils');
        if (pupils) pupils.style.transform = `translateX(${pupilX}px)`;
        
        const isDragging = hamsters.some(h => h.state === 'DRAGGED');
        container.style.cursor = isDragging ? 'grabbing' : 'crosshair';
    }

    function animate() {
        updateLogic();
        render();
        requestAnimationFrame(animate);
    }

    function startCatCycle() {
        const delay = 20000 + Math.random() * 40000;
        setTimeout(() => {
            const newX = 20 + Math.random() * 60;
            catState.x = newX;
            catState.look = 'center';
            catState.visible = true;
            predator.active = true;
            predator.x = newX;

            setTimeout(() => { catState.look = 'left'; }, 2500);
            setTimeout(() => { catState.look = 'right'; }, 4000);
            setTimeout(() => { catState.look = 'center'; }, 5500);

            setTimeout(() => {
                catState.visible = false;
                setTimeout(() => {
                    predator.active = false;
                    startCatCycle();
                }, 2000);
            }, 7000);
        }, delay);
    }

    function updateMousePosition(clientX, clientY) {
        const currentContainer = document.getElementById('hamsterBannerContainer');
        if (!currentContainer) return;

        const rect = currentContainer.getBoundingClientRect();
        const xRaw = clientX - rect.left;
        const xPct = (xRaw / rect.width) * 100;
        const yPx = rect.bottom - clientY;

        mouse.vx = xPct - mouse.lastX;
        mouse.vy = yPx - mouse.lastY;
        mouse.x = xPct;
        mouse.y = yPx;
        mouse.lastX = xPct;
        mouse.lastY = yPx;
    }

    window.addEventListener('mousemove', (e) => {
        updateMousePosition(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
        draggedId = null;
        mouse.isDown = false;
    });

    // Touch events support - Simplified for mobile
    // No need for complex slingshot system - tap to launch works great!

    startCatCycle();
    animate();
}
