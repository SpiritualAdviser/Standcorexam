

const buttonHandler = (buttonName) => {
    switch (buttonName) {
        case 'playSpaceShooter':
            window.open('./games/spaceShooter/index.html', '_self')
            break;

        case 'refineCalc':
            window.open('./games/refineCalc/index.html', '_self')
            break;
        case 'aboutCaves':
            window.open('./games/cavesAndCrystals/index.html', '_self')
            break;

        case 'backToMain':
            window.open('../../index.html', '_self')
            break;

        case 'goToToMain':
            window.open('index.html', '_self')
            break;

        case 'goToCavesAdventure':
            window.open('adventure.html', '_self')
            break;
        case 'goToSurvival':
            window.open('survival.html', '_self')
            break;

        case 'goToPopup':
            window.open('popup.html', '_self')
            break;

        case 'goToPlayers':
            window.open('players.html', '_self')
            break;

        case 'goToInfo':
            window.open('info.html', '_self')
            break;

        default:
            break;
    }

}

document.addEventListener('click', (event) => {
    buttonHandler(event.target.name);
})