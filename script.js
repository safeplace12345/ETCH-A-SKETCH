console.log("Test");
// layout button

// const main = document.querySelector('.main');

// function make_boxes(init) {
//     let div = [];
//     for (let i = 0; i < init; i++) {
//         div.push(document.createElement('div'));
//     }

//     return div
// }
// // create a random color
// function random_color() {
//     let random_num = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     return random_num;
//     console.log(random_num)
// }
// random_color();

// let random_Color = '';
// // store my boxes
// const divs = make_boxes(20);
let layout_btn = document.querySelector('.layout');
layout_btn.addEventListener('click', function () {
    const main = document.querySelector('.main');
    
    function make_boxes(init) {
        let div = [];
        for (let i = 0; i < init; i++) {
            div.push(document.createElement('div'));
        }

        return div
    }
    // create a random color
    function random_color() {
        let random_num = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return random_num;
        console.log(random_num)
    }
    random_color();

    let random_Color = '';
    // store my boxes

    let squares = 0;
    squares = window.prompt('Lay it out!')
    console.log(squares)
    const divs = make_boxes(squares);

    divs.forEach(element => {
        element.innerHTML = '<h1>Hover Over me!</h1>'
        element.classList.add('inner')
        // Add hover function
    })
    // mouseover effect
    divs.forEach(element => element.onmouseover = function () {
        element.style.backgroundColor = random_color();
        element.style.color = random_color();
    })


    let count = 0;
    // Appending boxes to main box
    for (count of divs) {
        main.appendChild(count)
    }

console.log(divs)
console.log(main.scrollHeight)

});

// appending class
// divs.forEach(element => {
//     element.innerHTML = '<h1>Hover Over me!</h1>'
//     element.classList.add('inner')
//     // Add hover function
// })
// // mouseover effect
// divs.forEach(element => element.onmouseover = function () {
//     element.style.backgroundColor = random_color();
//     element.style.color = random_color();
// })


// let count = 0;
// // Appending boxes to main box
// for (count of divs) {
//     main.appendChild(count)
// }
// layout btn
// let layout_btn = document.querySelector('.layout');
// layout_btn.addEventListener('click', function () {
//     let squares = window.prompt('Lay it out!')
//     console.log(squares)
//     createDiv(squares);
// });