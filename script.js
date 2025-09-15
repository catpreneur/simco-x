// ==UserScript==
// @name         SimcoX
// @namespace    http://tampermonkey.net/
// @version      2025-09-15
// @description  simco addons
// @author       catpreneur
// @match        https://www.simcompanies.com/*
// @icon         data:image/png;base64,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
// @grant        unsafeWindow
// @grant        GM.getValue
// @grant        GM.setValue
// @require      https://unpkg.com/preact@10.19.2/dist/preact.umd.js
// @require      https://unpkg.com/preact@10.19.2/hooks/dist/hooks.umd.js
// @require      https://unpkg.com/htm@3.1.1/dist/htm.umd.js
// ==/UserScript==

(async function () {
    'use strict';

    // Wait until libraries are loaded
    function waitForLibs() {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (window.preact && window.preactHooks && window.htm) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });
    }

    await waitForLibs();

    const { h, render } = window.preact;
    const { useState } = window.preactHooks;
    const html = window.htm.bind(h);

    function App() {

        function collectAll() {
            document.querySelectorAll('.js-landscape-busy-info').forEach(function(el) {
               el.click();
            });
        }


        return html`
            <div style=${{ padding: '10px', backgroundColor: '#f0f0f0' }}>
                <button onClick=${() => collectAll()}>Collect All</button>
            </div>
        `;
    }

    // Create outer container
    const win = document.createElement('div');
    win.id = 'preact-window';
    win.innerHTML = `
        <div id="drag-header">Simco-X</div>
        <div id="app"></div>
    `;

    // Window styles
    Object.assign(win.style, {
        position: 'fixed',
        top: '0',
        left: 'calc(50% - 125px)',
        width: '250px',
//        backgroundColor: 'white',
        border: '1px solid #888',
        zIndex: 10000,
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
    });

    // Header styles
    const header = win.querySelector('#drag-header');
    Object.assign(header.style, {
        padding: '10px',
        backgroundColor: '#444',
        color: 'white',
        cursor: 'move',
        userSelect: 'none',
        fontWeight: 'bold',
    });

    // Add to DOM
    document.body.appendChild(win);

    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            win.style.left = `${e.clientX - offsetX}px`;
            win.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = '';
    });

    // Mount preact app
    const mountPoint = win.querySelector('#app');
    render(h(App), mountPoint);
})();

