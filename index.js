function christmasCountdown(){
    const christmasDate = new Date ("December 25, 2025 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = displayDay;
        document.querySelector(".hours").textContent = displayHour;
        document.querySelector(".minutes").textContent = displayMinute;
        document.querySelector(".seconds").textContent = displaySecond;
        clearInterval(timerID);
        merryChristmas();
    }
}

let timerID = setInterval(christmasCountdown, 1000);


function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "Merry Christmas!!! HO-HO-HO!";
    heading.classList.add("red");
}

const button = document.querySelector("#myBtn");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})

particlesJS("particles-js", {
    "particles":{"number":{
        "value":400,
        "density":{
            "enable":true,
            "value_area":800
        }},
        "color":{
            "value":"#fff"
        },
        "shape":{
            "type":"image",
            "stroke":{
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"snowflake.png",
                "width":100,
                "height":100
            }},
            "opacity":{
                "value":0.5,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }},
                "size":{
                    "value":8,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":40,
                        "size_min":0.1,
                        "sync":false
                    }},
                    "line_linked":{
                        "enable":false,
                        "distance":500,
                        "color":"#ffffff",
                        "opacity":0.4,
                        "width":2
                    },
                    "move":{
                        "enable":true,
                        "speed":3.333805622463184,
                        "direction":"bottom",
                        "random":true,
                        "straight":false,
                        "out_mode":"out",
                        "bounce":false,
                        "attract":{
                            "enable":false,
                            "rotateX":600,
                            "rotateY":1200
                        }}},
                        "interactivity":{
                            "detect_on":"canvas",
                            "events":{
                                "onhover":{
                                    "enable":false,
                                    "mode":"bubble"
                                },
                                "onclick":{
                                    "enable":true,
                                    "mode":"repulse"
                                },
                                "resize":true
                            },
                            "modes":{
                                "grab":{
                                    "distance":400,
                                    "line_linked":{
                                        "opacity":0.5
                                    }},
                                    "bubble":{
                                        "distance":400,
                                        "size":4,
                                        "duration":0.3,
                                        "opacity":1,
                                        "speed":3
                                    },
                                    "repulse":{
                                        "distance":200,
                                        "duration":0.4
                                    },
                                    "push":{
                                        "particles_nb":4
                                    },
                                    "remove":{
                                        "particles_nb":2
                                    }}},
                                    "retina_detect":true
                                });
                                var count_particles, stats, update; stats = new Stats; 
                                stats.setMode(0); 
                                stats.domElement.style.position = 'absolute'; 
                                stats.domElement.style.left = '0px'; 
                                stats.domElement.style.top = '0px'; 
                                document.body.appendChild(stats.domElement); 
                                count_particles = document.querySelector('.js-count-particles'); 
                                update = function() { 
                                    stats.begin(); stats.end(); 
                                    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
                                        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
                                    } 
                                    requestAnimationFrame(update); 
                                }; 
                                requestAnimationFrame(update);

