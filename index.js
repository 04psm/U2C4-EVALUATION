// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",masaiFormBtn)
var cMatchData = [] || JSON.parse(localStorage.setItem("schedule"));
function masaiFormBtn(){
    event.preventDefault();
    var matchData = {
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    cMatchData.push(matchData)
    //console.log(cMatchData)
    localStorage.setItem("schedule",JSON.stringify(cMatchData))
}