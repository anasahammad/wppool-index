
window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar')
    const logo = document.getElementById('logo')
    const rightSecton = document.getElementById('rightSection')
    if(window.scrollY > 50){
        navbar.classList.remove('bg-[#2042B6]')
        navbar.classList.add('bg-[#F3F3F3]')
        logo.src = "./images/logoSticky.png"
        rightSecton.classList.remove('text-white')
      
    }
     else if(window.scrollY > 50){
        navbar.classList.remove('bg-[#2042B6]')
        navbar.classList.add('bg-[#fff')
        logo.src = "./images/logoSticky.png"
        rightSecton.classList.remove('text-white')
     }
    else{
        navbar.classList.remove('bg-[#F3F3F3]')
        navbar.classList.add('bg-[#2042B6]')
        logo.src = "./images/logo.png"
        rightSecton.classList.add('text-white')
    }
})


// toggle menu
 function sidebarOpen() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= "block"
}
 function sidebarClose() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= "none"
}




// chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['-', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'WPPOOL',
                backgroundColor: '#FC714D',
                borderColor: '#FC714D',
                data: [-10, 0, 5, 2, 20, 30, 45]
            }, {
                label: 'Google',
                backgroundColor: '#615DE3',
                borderColor: '#615DE3',
                data: [0, 20, 15, 10, 25, 35, 50]
            }, {
                label: 'Microsoft',
                backgroundColor: '#AFCD80',
                borderColor: '#AFCD80',
                data: [0, 30, 25, 20, 30, 40, 55, 90]
            }, {
                label: 'Twitter',
                 backgroundColor: '#6F34A1',
                borderColor: '#6F34A1',
                data: [0, 40, 35, 30, 35, 45, 60]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: ''
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: ''
                    }
                }
            }
        }
    });
});

    

// const slides = [...document.getElementsByClassName("sliderImage")]
// console.log( slides);
// let counter = 0;

// slides?.forEach((slide, index) => {
//     slide.style.left = `${index * 100}`
    
// });
   

// const goPrev = ()=>{
//     counter--
//     sliderImage()
// }
// const goNext = ()=>{
//     counter++
//     sliderImage()
// }
// const sliderImage = ()=>{
//     slides.forEach((slide)=>{
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }


