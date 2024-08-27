// Select the elements
const heroSection = $(".hero_section");
const slider = $(".cards_container");

// Initialize Slick Slider
slider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    centerMode: true,
    infinite: false,
    // responsive: [
    //     {
    //         breakpoint: 767, 
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             vertical: true,
    //             verticalSwiping: true,
    //             centerMode: true
    //         }
    //     }
    // ]
});

slider.slick('slickGoTo', 1);

// Vertical Mouse Scroll on the hero section
heroSection.on('wheel', function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
        slider.slick('slickNext');
    } else {
        slider.slick('slickPrev');
    }
});


// Goal planner section js

//range slider js
var RangeSlider = (function () {
    var elRangeInputs = document.querySelectorAll(".range");

    function setProgress(elTarget) {
        var elRangeBar = elTarget.parentElement;
        var intThumbWidth = elRangeBar.clientHeight * 3;
        var intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
        var intThumbWidthOffset = intThumbWidth / 2;

        var intProgressPosition = (elTarget.value - elTarget.min) / (elTarget.max - elTarget.min);
        var intRangePosition = (intRangeBarWidth * intProgressPosition) + intThumbWidthOffset;


        elRangeBar.style.background =
            "linear-gradient(to right, #00D64B " +
            intRangePosition + "px, #E5E7E0 " +
            intRangePosition + "px";
    }

    for (var i = 0; i < elRangeInputs.length; i++) {
        elRangeInputs[i].firstElementChild.addEventListener("input", function () {
            setProgress(this);
        });

        setProgress(elRangeInputs[i].firstElementChild);
    }
})();

//range slider js
// Goal Amount
const goalAmountInput = document.getElementById('goalAmount');
const goalAmountSlider = document.getElementById('goalAmountSlider');

goalAmountInput.addEventListener('input', () => {
    goalAmountSlider.value = goalAmountInput.value;
});

goalAmountSlider.addEventListener('input', () => {
    goalAmountInput.value = goalAmountSlider.value;
});

// Period
const periodInput = document.getElementById('period');
const periodSlider = document.getElementById('periodSlider');

periodInput.addEventListener('input', () => {
    periodSlider.value = periodInput.value;
});

periodSlider.addEventListener('input', () => {
    periodInput.value = periodSlider.value;
});

// Growth Rate
const growthRateInput = document.getElementById('growthRate');
const growthRateSlider = document.getElementById('growthRateSlider');

growthRateInput.addEventListener('input', () => {
    growthRateSlider.value = growthRateInput.value;
});

growthRateSlider.addEventListener('input', () => {
    growthRateInput.value = growthRateSlider.value;
});

// Compound Interest Calculation Function
function calculateCompoundInterest(principal, rate, time) {
    const n = 1; // Compounded annually
    const compoundInterest = principal * (Math.pow((1 + rate / (n * 100)), n * time));
    return compoundInterest;
}

// Invest Now Button Action
const investBtn = document.getElementById('investBtn');

// Chart.js instance variable
let myChart = null;

// Function to calculate compound interest
function calculateCompoundInterest(principal, rate, time) {
    const amount = principal * Math.pow((1 + rate / 100), time);
    return amount;
}

// Function to create or update the chart
function createOrUpdateChart(totalInvest, estReturn, maturityValue) {
    if (myChart) {
        // Update the existing chart
        myChart.data.datasets[0].data = [totalInvest, estReturn, maturityValue];
        myChart.update();
    } else {
        // Create a new chart instance
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'doughnut', // You can use 'pie' for a similar effect
            data: {
                labels: ['Total Invested', 'Est. returns', 'Maturity value'],
                datasets: [{
                    label: 'My Dataset',
                    data: [totalInvest, estReturn, maturityValue],
                    backgroundColor: [
                        '#10110D',
                        '#017B2C',
                        '#00D64B'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }

    // Hide the image and show the chart
    document.getElementById('goalPlanner_img').style.display = 'none';
    document.querySelector('.chart_wrap').style.display = 'block';
}

// Button click event
investBtn.addEventListener('click', () => {
    const goalAmount = parseFloat(goalAmountInput.value);
    const period = parseFloat(periodInput.value);
    const growthRate = parseFloat(growthRateInput.value);

    if (!isNaN(goalAmount) && !isNaN(period) && !isNaN(growthRate)) {
        const totalInvest = (goalAmount * period).toFixed(2);  // Total Investment
        const maturityValue = (calculateCompoundInterest(goalAmount, growthRate, period)).toFixed(2);  // Maturity Value
        const estReturn = (maturityValue - totalInvest).toFixed(2);  // Estimated Return

        // Create or update the chart with new values
        createOrUpdateChart(totalInvest, estReturn, maturityValue);
    } else {
        alert('Please enter valid numbers for all inputs.');
    }
});


// Goal planner section js


// supercharge section js
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600, // Duration of the animation
        easing: 'ease-out', // Easing function for the animation
    });
});

// supercharge section js
