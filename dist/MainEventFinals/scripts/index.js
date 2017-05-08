"use strict";
function onDrag(e) {
    console.log(e);
    e.dataTransfer.setData('team', e.target.innerText);
}
function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'link';
}
function onDrop(e) {
    console.log('on drop', e);
    let data = e.dataTransfer.getData('team');
    console.log('data: ', data);
    applyTeam(JSON.parse(data), e.target);
}
function applyTeam(team, ele) {
    if (ele) {
        ele.innerHTML = '';
        let logoImg = document.createElement('img');
        logoImg.src = team.logo;
        ele.appendChild(logoImg);
        ele.innerHTML = ele.innerHTML + team.name;
    }
}
function initTeam(team, ele) {
    if (ele) {
        applyTeam(team, ele);
        ele.draggable = true;
        ele.ondragstart = (e) => {
            console.log(e);
            e.dataTransfer.setData('team', JSON.stringify(team));
        };
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let teamWings = {
        name: 'Wings',
        logo: 'http://cdn.dota2.com/apps/dota2/images/international2016/overview/teamlogos/small/1836806.png',
    };
    let teamDC = {
        name: 'DC',
        logo: 'http://cdn.dota2.com/apps/dota2/images/international2016/overview/teamlogos/small/2512249.png',
    };
    initTeam(teamWings, document.getElementById('team1'));
    initTeam(teamDC, document.getElementById('team2'));
    let match1 = document.getElementById('match1');
    if (match1) {
        let oldStyle = getComputedStyle(match1).background;
        match1.ondragenter = () => {
            match1.style.background = 'red';
        };
        match1.ondragleave = () => {
            match1.style.background = oldStyle;
        };
        match1.ondrop = (e) => {
            console.log('on drop', e);
            match1.style.background = oldStyle;
            let data = e.dataTransfer.getData('team');
            console.log('data: ', data);
            applyTeam(JSON.parse(data), e.target);
        };
    }
});
var MatchFormat;
(function (MatchFormat) {
    MatchFormat[MatchFormat["BO1"] = 0] = "BO1";
    MatchFormat[MatchFormat["BO2"] = 1] = "BO2";
    MatchFormat[MatchFormat["BO3"] = 2] = "BO3";
    MatchFormat[MatchFormat["BO5"] = 3] = "BO5";
})(MatchFormat || (MatchFormat = {}));
