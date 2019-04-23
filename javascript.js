function account(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

function checkAccount() {
    let txt_account = document.getElementById('tex').value;
    console.log(account(txt_account));

}