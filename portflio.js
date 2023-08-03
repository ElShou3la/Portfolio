
let header_ul = document.getElementById(`header-ul`)
let header_bars = document.getElementById(`bars`)
let theControl = document.getElementById(`the_control`)
// Body Cansletion
theControl.addEventListener(`click`, () => {
    header_ul.classList.remove(`header_js`)
})


header_bars.addEventListener(`click`, () => {
    header_ul.classList.toggle(`header_js`)
})




// The Scroll Of Navigations
let skills_nav = document.getElementById(`skills-nav`)
let services_nav = document.getElementById(`serivces-nav`)
let projects_nav = document.getElementById(`projects-nav`)
let contact_nav = document.getElementById(`contact-nav`)



skills_nav.onclick = () => {
    window.scrollTo({
        left: 0,
        top: 500,
        behavior: `smooth`
    })
}

services_nav.onclick = () => {
    window.scrollTo({
        left: 0,
        top: 100,
        behavior: `smooth`
    })
}






// Slider Init
let slider = document.getElementById(`slider`)
let nextButton = document.getElementById(`next`)
let previousButton = document.getElementById(`previous`)
let images_container = document.getElementById(`images-container`)
// Slider-Options
let slider_option_1 = document.getElementById(`slider-option-1`)
let slider_option_2 = document.getElementById(`slider-option-2`)
let slider_option_3 = document.getElementById(`slider-option-3`)
let slider_option_4 = document.getElementById(`slider-option-4`)

// Images in the slider 
let imge_slider_1 = document.getElementById(`images-container-img-1`)
let imge_slider_2 = document.getElementById(`images-container-img-2`)
let imge_slider_3 = document.getElementById(`images-container-img-3`)
let imge_slider_4 = document.getElementById(`images-container-img-4`)
let imge_slider_5 = document.getElementById(`images-container-img-5`)
let imge_slider_6 = document.getElementById(`images-container-img-6`)
let imge_slider_7 = document.getElementById(`images-container-img-7`)
let imge_slider_8 = document.getElementById(`images-container-img-8`)
let imge_slider_9 = document.getElementById(`images-container-img-9`)
let imge_slider_10 = document.getElementById(`images-container-img-10`)
let imge_slider_11 = document.getElementById(`images-container-img-11`)
let imge_slider_12 = document.getElementById(`images-container-img-12`)
let imge_slider_13 = document.getElementById(`images-container-img-13`)
let imge_slider_14 = document.getElementById(`images-container-img-14`)
let imge_slider_15 = document.getElementById(`images-container-img-15`)
let imge_slider_16 = document.getElementById(`images-container-img-16`)
let imge_slider_17 = document.getElementById(`images-container-img-17`)
let imge_slider_18 = document.getElementById(`images-container-img-18`)
let imge_slider_19 = document.getElementById(`images-container-img-19`)



let Slider_array = Array.from(document.querySelectorAll(`#images-container img `))

let images_index = 0



// Next Button

// nextButton.addEventListener(`click`, () => {
//     images_index += 1
//     Slider_array.forEach((e) => {
//         e.classList.remove(`active`)
//     })
//     Slider_array[images_index].classList.add(`active`)
//     console.log(images_index)
// })


// // PreviousButton

// previousButton.addEventListener(`click`, () => {
//     images_index -= 1
//     Slider_array.forEach((e) => {
//         e.classList.remove(`active`)
//     })
//     Slider_array[images_index].classList.add(`active`)
//     console.log(images_index)
// })







// Slider One ===============================================



slider_option_1.addEventListener(`click`, () => {
    let images_index = 0
    images_index = 0
    imge_slider_8.style.display = `none`
    imge_slider_9.style.display = `none`
    imge_slider_10.style.display = `none`
    imge_slider_11.style.display = `none`
    imge_slider_12.style.display = `none`
    imge_slider_13.style.display = `none`
    imge_slider_14.style.display = `none`
    imge_slider_15.style.display = `none`
    imge_slider_16.style.display = `none`
    imge_slider_17.style.display = `none`
    imge_slider_18.style.display = `none`
    imge_slider_19.style.display = `none`

    imge_slider_1.setAttribute(`src`, `imgs/ecuda-school.jpg.png`)
    imge_slider_2.setAttribute(`src`, `imgs/ecuda-school2.png`)
    imge_slider_3.setAttribute(`src`, `imgs/ecuda-school3.png`)
    imge_slider_4.setAttribute(`src`, `imgs/ecuda-school4.png`)
    imge_slider_5.setAttribute(`src`, `imgs/ecuda-school5.png`)
    imge_slider_6.setAttribute(`src`, `imgs/ecuda-school6.png`)
    imge_slider_7.setAttribute(`src`, `imgs/ecuda-school7.png`)

    //  Start Buttons ===============================================
    nextButton.addEventListener(`click`, () => {
        images_index += 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)
        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }


    })
    // PreviousButton

    previousButton.addEventListener(`click`, () => {
        images_index -= 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)

        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }

    })

    if (images_index >= 5) {
        nextButton.style.display = `none`
    } else if (images_index <= 5) {
        nextButton.style.display = `flex`
    }
    if (images_index <= 0) {
        previousButton.style.display = `none`
    } else if (images_index > 0) {
        previousButton.style.display = `flex`
    }

})













//=================================================================================================















// Slider Two   ==============================================

slider_option_2.addEventListener(`click`, () => {
    let images_index = 0
    images_index = 0
    imge_slider_8.style.display = `none`
    imge_slider_9.style.display = `none`
    imge_slider_10.style.display = `none`
    imge_slider_11.style.display = `none`
    imge_slider_12.style.display = `none`
    imge_slider_13.style.display = `none`
    imge_slider_14.style.display = `none`
    imge_slider_15.style.display = `none`
    imge_slider_16.style.display = `none`
    imge_slider_17.style.display = `none`
    imge_slider_18.style.display = `none`
    imge_slider_19.style.display = `none`

    imge_slider_1.setAttribute(`src`, `imgs/Nike-cover1.png`)
    imge_slider_2.setAttribute(`src`, `imgs/Nike-cover2.png`)
    imge_slider_3.setAttribute(`src`, `imgs/Nike-cover4.png`)
    imge_slider_4.setAttribute(`src`, `imgs/Nike-cover5.png`)
    imge_slider_5.setAttribute(`src`, `imgs/Nike-cover6.png`)
    imge_slider_6.setAttribute(`src`, `imgs/Nike-cover7.png`)
    imge_slider_7.setAttribute(`src`, `imgs/Nike-cover8.png`)

    //  Start Buttons ===============================================
    nextButton.addEventListener(`click`, () => {
        images_index += 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)
        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }


    })
    // PreviousButton

    previousButton.addEventListener(`click`, () => {
        images_index -= 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)

        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }

    })

    if (images_index >= 5) {
        nextButton.style.display = `none`
    } else if (images_index <= 5) {
        nextButton.style.display = `flex`
    }
    if (images_index <= 0) {
        previousButton.style.display = `none`
    } else if (images_index > 0) {
        previousButton.style.display = `flex`
    }

})










//=================================================================================================



















// Slider Three=============================================

slider_option_3.addEventListener(`click`, () => {
    let images_index = 0
    images_index = 0

    imge_slider_7.style.display = `inline`
    imge_slider_8.style.display = `inline`
    imge_slider_9.style.display = `inline`
    imge_slider_10.style.display = `inline`
    imge_slider_11.style.display = `inline`
    imge_slider_12.style.display = `inline`
    imge_slider_13.style.display = `inline`
    imge_slider_14.style.display = `inline`
    imge_slider_15.style.display = `inline`
    imge_slider_16.style.display = `inline`
    imge_slider_17.style.display = `inline`
    imge_slider_18.style.display = `inline`
    imge_slider_19.style.display = `inline`








    imge_slider_1.setAttribute(`src`, `imgs/1.png`)
    imge_slider_2.setAttribute(`src`, `imgs/2.png`)
    imge_slider_3.setAttribute(`src`, `imgs/3.png`)
    imge_slider_4.setAttribute(`src`, `imgs/4.png`)
    imge_slider_5.setAttribute(`src`, `imgs/5.png`)
    imge_slider_6.setAttribute(`src`, `imgs/6.png`)
    imge_slider_7.setAttribute(`src`, `imgs/7.png`)
    imge_slider_8.setAttribute(`src`, `imgs/8.png`)
    imge_slider_9.setAttribute(`src`, `imgs/9.png`)
    imge_slider_10.setAttribute(`src`, `imgs/10.png`)
    imge_slider_11.setAttribute(`src`, `imgs/11.png`)
    imge_slider_12.setAttribute(`src`, `imgs/12.png`)
    imge_slider_13.setAttribute(`src`, `imgs/13.png`)
    imge_slider_14.setAttribute(`src`, `imgs/14.png`)
    imge_slider_15.setAttribute(`src`, `imgs/15.png`)
    imge_slider_16.setAttribute(`src`, `imgs/16.png`)
    imge_slider_17.setAttribute(`src`, `imgs/17.png`)
    imge_slider_18.setAttribute(`src`, `imgs/18.png`)
    imge_slider_19.setAttribute(`src`, `imgs/19.png`)


    //  Start Buttons ===============================================
    nextButton.addEventListener(`click`, () => {
        images_index += 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)
        if (images_index >= 18) {
            nextButton.style.display = `none`
        } else if (images_index <= 18) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }


    })
    // PreviousButton

    previousButton.addEventListener(`click`, () => {
        images_index -= 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)

        if (images_index >= 18) {
            nextButton.style.display = `none`
        } else if (images_index <= 18) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }

    })

    if (images_index >= 5) {
        nextButton.style.display = `none`
    } else if (images_index <= 5) {
        nextButton.style.display = `flex`
    }
    if (images_index <= 0) {
        previousButton.style.display = `none`
    } else if (images_index > 0) {
        previousButton.style.display = `flex`
    }

    images_index = 0
})
















// ===============================================================================











slider_option_4.addEventListener(`click`, () => {
    let images_index = 0
    images_index = 0
    imge_slider_7.style.display = `none`
    imge_slider_8.style.display = `none`
    imge_slider_9.style.display = `none`
    imge_slider_10.style.display = `none`
    imge_slider_11.style.display = `none`
    imge_slider_12.style.display = `none`
    imge_slider_13.style.display = `none`
    imge_slider_14.style.display = `none`
    imge_slider_15.style.display = `none`
    imge_slider_16.style.display = `none`
    imge_slider_17.style.display = `none`
    imge_slider_18.style.display = `none`
    imge_slider_19.style.display = `none`

    imge_slider_1.setAttribute(`src`, `imgs/1.jpg`)
    imge_slider_2.setAttribute(`src`, `imgs/2.jpg`)
    imge_slider_3.setAttribute(`src`, `imgs/3.jpg`)
    imge_slider_4.setAttribute(`src`, `imgs/4.jpg`)
    imge_slider_5.setAttribute(`src`, `imgs/5.jpg`)
    imge_slider_6.setAttribute(`src`, `imgs/6.jpg`)

    //  Start Buttons ===============================================
    nextButton.addEventListener(`click`, () => {
        images_index += 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)
        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }


    })
    // PreviousButton

    previousButton.addEventListener(`click`, () => {
        images_index -= 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)

        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }

    })



})
















// setInterval(() => {
//     console.log(images_index)
// } , 2000)




// slider_option_3.addEventListener(`click`, () => {
//     let images_index = 0
//     for (i = 7; i < 19; i++) {
//         let Created_image = document.createElement(`img`)
//         Created_image.src = `imgs/1.png`
//         Created_image.id  = `images-container-img-${i}`
//         document.getElementById(`images-container`).appendChild(Created_image)
//     }

//     imge_slider_1.setAttribute(`src`, `imgs/1.png`)
//     imge_slider_2.setAttribute(`src`, `imgs/2.png`)
//     imge_slider_3.setAttribute(`src`, `imgs/3.png`)
//     imge_slider_4.setAttribute(`src`, `imgs/4.png`)
//     imge_slider_5.setAttribute(`src`, `imgs/5.png`)
//     imge_slider_6.setAttribute(`src`, `imgs/6.png`)

//     //  Start Buttons ===============================================
//     nextButton.addEventListener(`click`, () => {
//         images_index += 1
//         Slider_array.forEach((e) => {
//             e.classList.remove(`active`)
//         })
//         Slider_array[images_index].classList.add(`active`)
//         console.log(images_index)
//         if (images_index >= 19) {
//             nextButton.style.display = `none`
//         } else if (images_index <= 19) {
//             nextButton.style.display = `flex`
//         }
//         if (images_index <= 0) {
//             previousButton.style.display = `none`
//         } else if (images_index > 0) {
//             previousButton.style.display = `flex`
//         }


//     })
//     // PreviousButton

//     previousButton.addEventListener(`click`, () => {
//         images_index -= 1
//         Slider_array.forEach((e) => {
//             e.classList.remove(`active`)
//         })
//         Slider_array[images_index].classList.add(`active`)
//         console.log(images_index)

//         if (images_index >= 19) {
//             nextButton.style.display = `none`
//         } else if (images_index <= 19) {
//             nextButton.style.display = `flex`
//         }
//         if (images_index <= 0) {
//             previousButton.style.display = `none`
//         } else if (images_index > 0) {
//             previousButton.style.display = `flex`
//         }

//     })

// })

// console.log(19 - 7)
















// The Deafult 

images_index = 0
    imge_slider_8.style.display = `none`
    imge_slider_9.style.display = `none`
    imge_slider_10.style.display = `none`
    imge_slider_11.style.display = `none`
    imge_slider_12.style.display = `none`
    imge_slider_13.style.display = `none`
    imge_slider_14.style.display = `none`
    imge_slider_15.style.display = `none`
    imge_slider_16.style.display = `none`
    imge_slider_17.style.display = `none`
    imge_slider_18.style.display = `none`
    imge_slider_19.style.display = `none`

    imge_slider_1.setAttribute(`src`, `imgs/Nike-cover1.png`)
    imge_slider_2.setAttribute(`src`, `imgs/Nike-cover2.png`)
    imge_slider_3.setAttribute(`src`, `imgs/Nike-cover4.png`)
    imge_slider_4.setAttribute(`src`, `imgs/Nike-cover5.png`)
    imge_slider_5.setAttribute(`src`, `imgs/Nike-cover6.png`)
    imge_slider_6.setAttribute(`src`, `imgs/Nike-cover7.png`)
    imge_slider_7.setAttribute(`src`, `imgs/Nike-cover8.png`)

    //  Start Buttons ===============================================
    nextButton.addEventListener(`click`, () => {
        images_index += 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)
        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }


    })
    // PreviousButton

    previousButton.addEventListener(`click`, () => {
        images_index -= 1
        Slider_array.forEach((e) => {
            e.classList.remove(`active`)
        })
        Slider_array[images_index].classList.add(`active`)
        console.log(images_index)

        if (images_index >= 5) {
            nextButton.style.display = `none`
        } else if (images_index <= 5) {
            nextButton.style.display = `flex`
        }
        if (images_index <= 0) {
            previousButton.style.display = `none`
        } else if (images_index > 0) {
            previousButton.style.display = `flex`
        }

    })

    if (images_index >= 5) {
        nextButton.style.display = `none`
    } else if (images_index <= 5) {
        nextButton.style.display = `flex`
    }
    if (images_index <= 0) {
        previousButton.style.display = `none`
    } else if (images_index > 0) {
        previousButton.style.display = `flex`
    }







