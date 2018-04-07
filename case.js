// Scrolls to wavefire case study
const scrollToWave = () => {
    const wavefire = document.querySelector('#wavefireStudy'),          location = wavefire.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

// Scrolls to splitsecnd case study
const scrollToSplit = () => {
    const splitsecnd = document.querySelector('#splitsecndStudy'),          location = splitsecnd.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

// Scrolls to edgenet section
const scrollToEdge = () => {
    const edgenet = document.querySelector('#edgenetStudy'),          location = edgenet.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

const wavefireClick = document.querySelector('#wavefire').addEventListener('click', scrollToWave);

const splitsecndClick = document.querySelector('#splitsecnd').addEventListener('click', scrollToSplit);

const edgenetClick = document.querySelector('#edgenet').addEventListener('click', scrollToEdge);
