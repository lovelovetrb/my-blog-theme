
function copyToClipboard() {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = location.href;

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    var copyBtn = document.getElementById('copy-btn');

    copyBtn.classList.add("copied");
    setTimeout(() => {
        copyBtn.classList.remove("copied");
    }, 1200);
}