Shery.imageEffect("#back",
    {
        style: 5,
        config: { "a": { "value": 2.29, "range": [0, 30] }, "b": { "value": -0.95, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.1006564200727866 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 3.24, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 3.88, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.37, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.91, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.51, "range": [0, 1] }, "antialias_threshold": { "value": 0.03, "range": [0, 0.1] }, "noise_height": { "value": 0.14, "range": [0, 2] }, "noise_scale": { "value": 21.37, "range": [0, 100] } },
        gooey: true
    })

let elem1 = document.querySelector(".elem1");
let elem2 = document.querySelector(".elem2");
let elem3 = document.querySelector(".elem3");

let arrLength = 4;
let index = 0;
let firsth1 = ["mia stays", "ethan's cool", "luke's approach", "mark", "David miller"];
let secondh1 = ["composed", "vibe zero", "zero frets", "face life", "funks"];
let thirdh1 = ["zero agitation", "burdness", "cool", "zero tension", "zero"];

let h1s = elem1.querySelector("h1");
let h2s = elem2.querySelector("h1");
let h3s = elem3.querySelector("h1");

document.querySelector("main").addEventListener("click", () => {
    h1s.innerText = firsth1[index];
    h2s.innerText = secondh1[index];
    h3s.innerText = thirdh1[index];

    if (index === arrLength) {
        index = 0;
    } else {
        index++;
    }
})


