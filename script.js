let count = 0;
let testStarted = false;
let timer = null;

document.getElementById('testButton').addEventListener('click', function() {
    if (!testStarted) {
        testStarted = true;
        timer = setTimeout(endTest, 1000); // 默认1秒，可调整
    }
    count++;
    updateSpeedDisplay();
});

document.getElementById('resetButton').addEventListener('click', function() {
    resetTest();
});

function updateSpeedDisplay() {
    const speedDisplay = document.getElementById('speedDisplay');
    speedDisplay.textContent = `手速：${count} 次/秒`;
}

function endTest() {
    document.getElementById('testButton').style.display = 'none';
    clearTimeout(timer);
}

function resetTest() {
    count = 0;
    testStarted = false;
    document.getElementById('testButton').style.display = 'block'; // 确保按钮显示
    updateSpeedDisplay();
}
