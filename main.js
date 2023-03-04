var splashScreen = document.querySelector(".splash");
var splashTxt = document.querySelector(".splash-txt");
var splashTxtSpan = document.querySelector(".splash-txt span");
var home = document.querySelector(".home");
var content = document.querySelector(".content");
var backgroundImg = document.querySelector(".background-img");
var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");
var pagination = document.querySelector(".pagination");
var paginationArr = [
    {
        value: "",
        title: {
            text: "WE ARE BREAKING <br /> OUR VOW <br /> OF SILENCE",
            position: "top-left",
        },
        scroll: 0,
    },
    {
        value: 1,
        title: {
            text: "TALENT IS GIVEN <br /> TRUE SKILL IS <br /> EARNED",
            position: "center-left",
        },
        scroll: 1200,
    },
    {
        value: 2,
        title: {
            text: "BE FLEXIBLE TO <br /> CHANGE AND <br /> STURDY IN <br /> CONVICTION",
            position: "center-left",
        },
        scroll: 2000,
    },
    {
        value: 3,
        title: {
            text: "USE MANY SKILLS <br /> YET WORK AS ONE",
            position: "center-right",
        },
        scroll: 3200,
    },
    {
        value: 4,
        title: {
            text: "TO MASTER <br /> ANYTHING FIND <br /> INTEREST IN <br /> EVERYTHING",
            position: "center-right",
        },
        scroll: 4400,
    },
    {
        value: 5,
        title: {
            text: "INDIVIDUALS <br /> FLOURISH <br /> IF CULTURE <br /> AND WISDOM <br /> ARE SHARED",
            position: "center-right",
        },
        scroll: 5600,
    },
    {
        value: 6,
        title: {
            text: "TRIAN FOR <br /> PREFECTION BUT <br /> AIM FOR MORE",
            position: "center-left",
        },
        scroll: 7200,
    },
    {
        value: 7,
        title: {
            text: "TAKE PRIDE IN YOUR <br /> WORK BUT DO NOT <br /> SEEL PRAISE",
            position: "center-left",
        },
        scroll: 9200,
    },
    {
        value: 8,
        title: {
            text: "TEMPORARY <br /> SACRIFICE BRINGS <br /> LASTING RESULTS",
            position: "center-left",
        },
        scroll: 9200,
    },
    {
        value: 9,
        title: {
            text: "",
            position: "",
        },
        scroll: 11000,
    },
];
var currentSlide = 1;
setTimeout(function () {
    splashTxt.style.visibility = "visible";
}, 1000);
setTimeout(function () {
    splashTxt.style.transform = "translateX(0)";
    splashTxtSpan.style.visibility = "visible";
}, 2000);
setTimeout(function () {
    splashScreen.style.display = "none";
    home.style.display = "block";
}, 4000);
var createSectionTitle = function (_a) {
    var text = _a.text, position = _a.position;
    var p = document.createElement("p");
    p.innerHTML = text;
    p.className = "section-title " + position;
    home.appendChild(p);
};
var handlePaginationChange = function (prevSlide) {
    pagination.children[prevSlide - 1].style.background = "none";
    pagination.children[currentSlide - 1].style.background =
        "#ffffff";
};
var handleScroll = function (scroll, title) {
    content === null || content === void 0 ? void 0 : content.scroll({
        left: scroll || 0,
        behavior: "smooth",
    });
    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.style.animation = "fadeOut 0.5s";
    setTimeout(function () {
        home.removeChild(sectionTitle);
        createSectionTitle(title);
        rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener("click", rightArrowHandler);
        leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener("click", leftArrowHandler);
    }, 500);
};
var rightArrowHandler = function () {
    var prevSlide = currentSlide;
    var _a = paginationArr[currentSlide], scroll = _a.scroll, title = _a.title;
    currentSlide += 1;
    handleScroll(scroll, title);
    handlePaginationChange(prevSlide);
    leftArrow.style.visibility = "visible";
    if (currentSlide === paginationArr.length)
        rightArrow.style.visibility = "hidden";
    rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.removeEventListener("click", rightArrowHandler);
};
var leftArrowHandler = function () {
    var prevSlide = currentSlide;
    currentSlide -= 1;
    var _a = paginationArr[currentSlide - 1], scroll = _a.scroll, title = _a.title;
    handleScroll(scroll, title);
    handlePaginationChange(prevSlide);
    rightArrow.style.visibility = "visible";
    if (currentSlide <= 1)
        leftArrow.style.visibility = "hidden";
    leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.removeEventListener("click", leftArrowHandler);
};
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener("click", rightArrowHandler);
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener("click", leftArrowHandler);
paginationArr.forEach(function (_a, i) {
    var value = _a.value, _b = _a.scroll, scroll = _b === void 0 ? null : _b, title = _a.title;
    var button = document.createElement("button");
    button.innerText = "".concat(value);
    button.value = "".concat(value);
    button.addEventListener("click", function (e) {
        var target = e.target;
        var value = Number(target.value);
        pagination.children[currentSlide - 1].style.background =
            "none";
        target.style.backgroundColor = "#ffffff";
        rightArrow.style.visibility = "visible";
        if (value === paginationArr.length - 1)
            rightArrow.style.visibility = "hidden";
        if (!value)
            leftArrow.style.visibility = "hidden";
        if (value >= 1)
            leftArrow.style.visibility = "visible";
        handleScroll(scroll, title);
        currentSlide = Number(value) + 1;
    });
    pagination === null || pagination === void 0 ? void 0 : pagination.append(button);
});
//# sourceMappingURL=main.js.map