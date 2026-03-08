console.log("Connceted");

const allFilterBtn = document.getElementById("all-filter-btn");
const openFilterBtn = document.getElementById("open-filter-btn");
const closedFilterBtn = document.getElementById("closed-filter-btn");


const cardContainer = document.getElementById("card-container");
const loadingSpinner = document.getElementById("loadingSpinner");
const totalIssues = document.getElementById("totalIssues");

//Search
const searchInput = document.querySelector("input");
const searchBtn = document.querySelector(".btn-primary");

let allIssues = [];
let currentStatus = "all";

function toggleStyle(id){
    
    allFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    openFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    closedFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');

    allFilterBtn.classList.add('bg-gray-100' , 'text-[#64748B]');
    openFilterBtn.classList.add('bg-gray-100' , 'text-[#64748B]');
    closedFilterBtn.classList.add('bg-gray-100' , 'text-[#64748B]');

    const selected = document.getElementById(id);
    // currentStatus = id;

    selected.classList.remove('bg-gray-100' , 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]' , 'text-white');

    if(id === "all-filter-btn"){
        currentStatus = "all";
    }
    else if(id === "open-filter-btn"){
        currentStatus = "open";
    }
    else{
        currentStatus = "closed";
    }

    filterIssues();
}



function showLoading(){
    loadingSpinner.classList.remove("hidden");
    cardContainer.innerHTML = "";
}

function hideLoading(){
    loadingSpinner.classList.add("hidden");
}

const loadCards = () =>{
    showLoading();
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => {
        hideLoading();
        allIssues = json.data;
        displayCards(json.data);
    });
};

function filterIssues(){

    let filtered = allIssues;

    if(currentStatus !== "all"){
        filtered = allIssues.filter(issue => issue.status === currentStatus);
    }

    displayCards(filtered);
}

//search funtionalities

searchBtn.addEventListener("click", () => {

    const searchText = searchInput.value.toLowerCase();

    let filtered = allIssues.filter(issue => 
        issue.title.toLowerCase().includes(searchText) ||
        issue.description.toLowerCase().includes(searchText)
    );

    if(currentStatus !== "all"){
        filtered = filtered.filter(issue => issue.status === currentStatus);
    }

    displayCards(filtered);

});


const displayCards = (cards) =>{

    // const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    totalIssues.innerText = `${cards.length} Issues`;
    
    for(let card of cards){
        console.log(card);

         const borderColor = card.status === "open"
        ? "border-green-500"
        : "border-purple-500";

        const issueCard = document.createElement("div");
        issueCard.className =`bg-white rounded-xl shadow border-t-4 ${borderColor}`;
        issueCard.innerHTML = `
        

      <div class="p-5">

            <div class="flex justify-between items-center mb-4">

                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <img src="./assets/Open-Status.png" alt="">
                </div>

                <span class="text-xs font-semibold px-4 py-1 bg-red-100 text-red-500 rounded-full">
                    ${card.priority.toUpperCase()}
                </span>

            </div>

            <h2 class="font-semibold text-gray-800 mb-2 line-clamp-1">
                ${card.title}
            </h2>

            <p class="text-sm text-[#64748B] mb-4 line-clamp-2">
                ${card.description}
            </p>

            <div class="flex gap-2 mb-4">

                <span class="text-xs px-3 py-1 bg-red-100 text-red-500 rounded-full">
                    <i class="fa-solid fa-bug"></i> BUG
                </span>

                <span class="text-xs px-3 py-1 bg-orange-100 text-orange-500 rounded-full">
                    <i class="fa-solid fa-life-ring"></i> HELP WANTED
                </span>

            </div>

        </div>

        <div class="border-t border-gray-300 px-5 py-3 text-sm text-gray-500">
            <p>${card.author}</p>
            <p>${card.createdAt}</p>
        </div>

        `;
        cardContainer.appendChild(issueCard);

    }
};

loadCards();



