const events = [
  { start: 30, end: 120, title: "Sprint Planing" },
  { start: 300, end: 330, title: "Shaping" },
  { start: 290, end: 330, title: "UI CoP"  }
];

(function renderDay(array) {
  // calendar structure
  const now = moment();
  const dateHeading = now.format("MMMM Do YYYY");
  const dateSubheading = now.format("dddd");

  const headingContainerElement = document.createElement("div");
  const dateHeadingElement = document.createElement("h1");
  const dateSubheadingElemet = document.createElement("p");
  const rootElement = document.querySelector("#root");
  const hoursElement = document.createElement("div");

  dateHeadingElement.innerText = dateHeading;
  dateSubheadingElemet.innerText = dateSubheading;

  rootElement.classList.add("container");
  headingContainerElement.classList.add("heading-container");
  hoursElement.classList.add("hours-container");
  rootElement.appendChild(headingContainerElement);
  headingContainerElement.appendChild(dateHeadingElement);
  headingContainerElement.appendChild(dateSubheadingElemet);
  rootElement.appendChild(hoursElement);

  // calendar logic
  const startingHour = 9;
  const finishingHour = 18;
  const totalHours = finishingHour - startingHour;

  const hoursFragment = document.createDocumentFragment();

  for (let i = 0; i <= totalHours; i++) {
    const hourElement = document.createElement("div");
    hourElement.classList.add("hour");
    hourElement.setAttribute("data-before-content", `${9 + i}:00`);
    hoursFragment.appendChild(hourElement);
  }

  hoursElement.appendChild(hoursFragment);

  const meetingsFragment = document.createDocumentFragment();
  let leftPosition = 0;

  for (let i = 0; i < array.length; i++) {
    const meetingElement = document.createElement("div");
    meetingElement.classList.add("meeting");
    meetingElement.setAttribute("id", `${i + 1}`)
    meetingElement.innerHTML = array[i].title;

    meetingElement.style.height = `${array[i].end - array[i].start}px`;
    meetingElement.style.width = `${Math.floor(100 / array.length + 1 - 2)}%`;
    meetingElement.style.top = `${(array[i].start - startingHour) + startingHour - 1}px`;
    meetingElement.style.left = `${leftPosition}%`;
    leftPosition += Math.floor(100 / array.length + 1);
    console.log(leftPosition);
    
    meetingsFragment.appendChild(meetingElement);
  }

  hoursElement.appendChild(meetingsFragment);
})(events); //
