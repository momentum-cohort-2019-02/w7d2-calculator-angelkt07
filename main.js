function insert(number){
    document.form.displayscreen.value = document.form.displayscreen.value+number
}

function equal() {
    let exp = document.form.displayscreen.value;
    if(exp) {
        document.form.displayscreen.value = eval(exp)
    }
}

function C() {
    document.form.displayscreen.value = ""
}

