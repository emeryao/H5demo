function onDrag(e: DragEvent): void {
    console.log(e);
    e.dataTransfer.setData('team', (e.target as HTMLElement).innerText);
}

function onDragOver(e: DragEvent): void {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'link';
}

function onDrop(e: DragEvent): void {
    console.log('on drop', e);
    let data = e.dataTransfer.getData('team');
    console.log('data: ', data);
    applyTeam(JSON.parse(data), e.target as HTMLElement);
}

function checkAsync(): boolean {
    try {
        // tslint:disable-next-line:no-eval
        eval('(async () => ({}))()');
        return true;
    } catch (e) {
        console.log('async not supported');
        return false;
    }
}

function applyTeam(team: Team, ele: HTMLElement): void {
    if (ele) {
        ele.innerHTML = '';
        let logoImg = document.createElement('img');
        logoImg.src = team.logo;
        ele.appendChild(logoImg);
        ele.innerHTML = ele.innerHTML + team.name;
    }
}

function initTeam(team: Team, ele: HTMLElement): void {
    if (ele) {
        applyTeam(team, ele);
        ele.draggable = true;
        ele.ondragstart = (e: DragEvent) => {
            console.log(e);
            e.dataTransfer.setData('team', JSON.stringify(team));
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let teamWings: Team = {
        name: 'Wings',
        logo: 'http://cdn.dota2.com/apps/dota2/images/international2016/overview/teamlogos/small/1836806.png',
    };

    let teamDC: Team = {
        name: 'DC',
        logo: 'http://cdn.dota2.com/apps/dota2/images/international2016/overview/teamlogos/small/2512249.png',
    };

    initTeam(teamWings, document.getElementById('team1')!);
    initTeam(teamDC, document.getElementById('team2')!);

    let match1 = document.getElementById('match1');
    if (match1) {
        let oldStyle = getComputedStyle(match1).background;
        match1.ondragenter = () => {
            match1!.style.background = 'red';
        };
        match1.ondragleave = () => {
            match1!.style.background = oldStyle;
        };
        match1.ondrop = (e: DragEvent) => {
            console.log('on drop', e);
            match1!.style.background = oldStyle;
            let data = e.dataTransfer.getData('team');
            console.log('data: ', data);
            applyTeam(JSON.parse(data), e.target as HTMLElement);
        };
    }
});

interface Team {
    name: string;
    logo: string;
}

interface Match {
    teamA: Team;
    teamB: Team;
    scoreA: number;
    scoreB: number;
    format: MatchFormat;
    result: string;
}

enum MatchFormat {
    BO1,
    BO2,
    BO3,
    BO5,
}
