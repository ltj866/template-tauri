import { invoke } from '@tauri-apps/api/core';
import StartGame from './game/main';

document.addEventListener('DOMContentLoaded', async () => {
    
    setInterval(() => {
        invoke('greet', { name: 'Phaser Game' });
    }, 2000)
    StartGame('game-container');

});