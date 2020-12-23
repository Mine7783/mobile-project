//修改根标签字体大小，用于适配
function adapter() {
    const fontSize = document.documentElement.clientWidth * 100 / 375
    document.documentElement.style.fontSize = fontSize + 'px'
}
adapter()
window.onresize = adapter