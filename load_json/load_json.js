
const rankingBody = document.querySelector("#rankings-table > tbody");

document.addEventListener("DOMContentLoaded", () => {
    loadRankings();
});

function loadRankings() {
    const request = new XMLHttpRequest();

    request.open("get", "rankings.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateRanking(json);
        }catch(e) {
            console.warn("Could not load rankings! :( " + e);

        }
    }

    request.send();
}

function populateRanking(json) {
    console.log(json);
    while(rankingBody.firstChild) {
        rankingBody.removeChild(rankingBody.firstChild);
    }

    json.forEach((row) => {
        const tr = document.createElement("tr");

        console.log(row);
        row.forEach((cell) => {
            console.log(cell);
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        rankingBody.appendChild(tr);
    });
}