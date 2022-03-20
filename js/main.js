import { MainFrame } from "./mainframe.js";

window.addEventListener('DOMContentLoaded', function () {
    // 
    const button_start_new_game = document.querySelector('button#start_new_game');
    button_start_new_game.addEventListener('click', function () { 
        MainFrame.initializeGame();

        MainFrame.hideStartNewContainer();
        MainFrame.showGameContainer(); 
    })

    // 
    MainFrame.showStartNewContainer();
    MainFrame.hideGameContainer();
});