// write js code here corresponding to matches.html
var tbody=document.querySelector('tbody')
var matchData =  JSON.parse(localStorage.getItem("schedule"))  || [] 
for(var i = 0 ; i < matchData.length;i++){
    var tr= document.createElement('tr')
    var td1= document.createElement('td')
     td1.innerText= matchData[i].matchNum;
    var td2= document.createElement('td')
    td2.innerText= matchData[i].teamA;
    var td3= document.createElement('td')
     td3.innerText= matchData[i].teamB;
    var td4= document.createElement('td')
    td4.innerText= matchData[i].date;
    var td5= document.createElement('td')
    td5.innerText= matchData[i].venue;
    var td6= document.createElement('td')
    td6.style.cursor="pointer"
    td6.innerText= "Favourite";
    td6.style.backgroundColor="green"
    td6.addEventListener("click",Fav)
    tr.append(td1,td2,td3,td4,td5,td6)
    tbody.append(tr)
}

function Fav(){
localStorage.setItem("favourites",JSON.stringify(favourites_data))

}