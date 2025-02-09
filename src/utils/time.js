function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 格式化时间
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 设置时间显示
    document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
}

function startUpdatingTime(currentTime) {
    // 初始化时间
    updateTime(currentTime);
    // 每秒更新时间
    return setInterval(() => {
        updateTime(currentTime);
    }, 1000);
}

export { startUpdatingTime };