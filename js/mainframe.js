export const MainFrame = {
    showStartNewContainer: function(){
        const start_new_container = document.querySelector('main #start_new');
        start_new_container.classList.add('active');
        console.log('AICI');
    },
    hideStartNewContainer: function(){
        const start_new_container = document.querySelector('main #start_new');
        start_new_container.classList.remove('active');
    },

    showGameContainer: function(){ 
        const game_container = document.querySelector('main #game');
        game_container.classList.add('active');
    },
    hideGameContainer: function(){
        const game_container = document.querySelector('main #game');
        game_container.classList.remove('active');
    },





}