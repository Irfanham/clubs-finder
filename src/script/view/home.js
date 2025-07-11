import Utils from "../utils.js";
import Clubs from "../data/local/clubs.js";

const home = () => {
    const searchFormElement = document.querySelector('#searchForm')
  const clubListContainerElement = document.querySelector("#clubListContainer");
  const clubQueryWaitingElement = clubListContainerElement.querySelector('.query-waiting')
  const clubLoadingElement =
    clubListContainerElement.querySelector(".search-loading");
  const clubListElement = clubListContainerElement.querySelector(".club-list");
  const listElement = clubListElement.querySelector(".list");

  const showSportClub = (query) => {
    showLoading();
    const result = Clubs.searchClub(query);
    displayResult(result);
    showClubList();
  };

  const displayResult = (clubs) => {
    const clubItems = clubs.map((club) => {
      return `<div class="card">
            <img class="fan-art-club" src='${club.strTeamBadge}' alt="Fan Art: ${club.strTeam}">
            <div class= "club-info">
                <div class="club-info__title">
                    <h2>${club.strTeam}</h2>
                </div>
                <div class="club-info__description">
                    <p>${club.strDescrioptionEN}</p>
                </div>
            </div>
            </div>`;
    });
    listElement.innerHTML = clubItems.join("");
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideELement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) =>{
        Utils.hideELement(element)
    })
    Utils.showElement(clubListElement)
  };

  const showQueryWaiting = () =>{
    Array.from(clubListContainerElement.children).forEach((element) =>{
        Utils.hideELement(element)
    })
    Utils.showElement(clubQueryWaitingElement)
  }

  const onSearchHandler = (event) => {
    event.preventDefault();
    const query = event.target.element.name.value
    showSportClub(query)
  }

  searchFormElement.addEventListener('submit',onSearchHandler)
  showQueryWaiting();
};

export default home;
