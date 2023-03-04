const splashScreen = document.querySelector<HTMLElement>(".splash");
const splashTxt = document.querySelector<HTMLElement>(".splash-txt");
const splashTxtSpan = document.querySelector<HTMLElement>(".splash-txt span");
const home = document.querySelector<HTMLElement>(".home");
const content = document.querySelector<HTMLElement>(".content");
const backgroundImg = document.querySelector<HTMLElement>(".background-img");
const leftArrow = document.querySelector<HTMLElement>(".left-arrow");
const rightArrow = document.querySelector<HTMLElement>(".right-arrow");
const pagination = document.querySelector<HTMLElement>(".pagination");
const paginationArr = [
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

setTimeout(() => {
  splashTxt.style.visibility = "visible";
}, 1000);

setTimeout(() => {
  splashTxt.style.transform = "translateX(0)";
  splashTxtSpan.style.visibility = "visible";
}, 2000);

setTimeout(() => {
  splashScreen.style.display = "none";
  home.style.display = "block";
}, 4000);

const createSectionTitle = ({ text, position }) => {
  const p = document.createElement("p");
  p.innerHTML = text;
  p.className = "section-title " + position;
  home.appendChild(p);
};

const handlePaginationChange = (prevSlide: number) => {
  (pagination.children[prevSlide - 1] as HTMLElement).style.background = "none";
  (pagination.children[currentSlide - 1] as HTMLElement).style.background =
    "#ffffff";
};

const handleScroll = (scroll: number, title) => {
  content?.scroll({
    left: scroll || 0,
    behavior: "smooth",
  });
  const sectionTitle = document.querySelector<HTMLElement>(".section-title");
  sectionTitle.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    home.removeChild(sectionTitle);
    createSectionTitle(title);
    rightArrow?.addEventListener("click", rightArrowHandler);
    leftArrow?.addEventListener("click", leftArrowHandler);
  }, 500);
};

const rightArrowHandler = () => {
  const prevSlide = currentSlide;
  const { scroll, title } = paginationArr[currentSlide];
  currentSlide += 1;
  handleScroll(scroll, title);
  handlePaginationChange(prevSlide);
  leftArrow.style.visibility = "visible";
  if (currentSlide === paginationArr.length)
    rightArrow.style.visibility = "hidden";
  rightArrow?.removeEventListener("click", rightArrowHandler);
};

const leftArrowHandler = () => {
  const prevSlide = currentSlide;
  currentSlide -= 1;
  const { scroll, title } = paginationArr[currentSlide - 1];
  handleScroll(scroll, title);
  handlePaginationChange(prevSlide);
  rightArrow.style.visibility = "visible";
  if (currentSlide <= 1) leftArrow.style.visibility = "hidden";
  leftArrow?.removeEventListener("click", leftArrowHandler);
};

rightArrow?.addEventListener("click", rightArrowHandler);
leftArrow?.addEventListener("click", leftArrowHandler);

paginationArr.forEach(({ value, scroll = null, title }, i) => {
  const button = document.createElement("button");
  button.innerText = `${value}`;
  button.value = `${value}`;
  button.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    (pagination.children[currentSlide - 1] as HTMLElement).style.background =
      "none";
    target.style.backgroundColor = "#ffffff";
    rightArrow.style.visibility = "visible";
    if (value === paginationArr.length - 1)
      rightArrow.style.visibility = "hidden";
    if (!value) leftArrow.style.visibility = "hidden";
    if (value >= 1) leftArrow.style.visibility = "visible";

    handleScroll(scroll, title);
    currentSlide = Number(value) + 1;
  });
  pagination?.append(button);
});
