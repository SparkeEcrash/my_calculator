$(document).ready(function () {
    $('body').keydown(getKeyPressNumber);
    $('.button').click(getClickNumber)
});

var current_key = null;
var previous_key = null;
var current_number_value = null;
var previous_number_value = null;
var number_behind_operator = null;
var number_holder_multiple_entry = null;
var operator = null;
var equation_array = [];

function getKeyPressNumber(e) {
    button_pressed(e.keyCode);
}

function getClickNumber(e) {
    button_pressed($(e.currentTarget).data('keycode'));
}

function button_pressed(entry) {
    switch (entry) {
        case 48:
            key_pressed = "n0";
            break;
        case 96:
            key_pressed = "n0";
            break;
        case 49:
            key_pressed = "n1";
            break;
        case 97:
            key_pressed = "n1";
            break;
        case 50:
            key_pressed = "n2";
            break;
        case 98:
            key_pressed = "n2";
            break;
        case 51:
            key_pressed = "n3";
            break;
        case 99:
            key_pressed = "n3";
            break;
        case 52:
            key_pressed = "n4";
            break;
        case 100:
            key_pressed = "n4";
            break;
        case 53:
            key_pressed = "n5";
            break;
        case 101:
            key_pressed = "n5";
            break;
        case 54:
            key_pressed = "n6";
            break;
        case 102:
            key_pressed = "n6";
            break;
        case 55:
            key_pressed = "n7";
            break;
        case 103:
            key_pressed = "n7";
            break;
        case 56:
            key_pressed = "n8";
            break;
        case 104:
            key_pressed = "n8";
            break;
        case 57:
            key_pressed = "n9";
            break;
        case 105:
            key_pressed = "n9";
            break;
        case 107:
            key_pressed = "o+";
            break;
        case 189:
            key_pressed = "o-";
            break;
        case 109:
            key_pressed = "o-";
            break;
        case 111:
            key_pressed = "o÷a";
            break;
        case 191:
            key_pressed = "o÷a";
            break;
        case 88:
            key_pressed = "o×b";
            break;
        case 106:
            key_pressed = "o×b";
            break;
        case 187:
            key_pressed = "e=";
            break;
        case 13:
            key_pressed = "e=";
            break;
        case 190:
            key_pressed = "d.";
            break;
        case 110:
            key_pressed = "d.";
            break;
        case 27:
            key_pressed = "qc";
            break;
        case 67:
            key_pressed = "xd";
            break;
        case 8:
            key_pressed = "xd";
            break;
        default:
            key_pressed = "others";
            break;
    }

    if (key_pressed !== "others") {
        equation_array.length == 0 ? checkFirstInput(key_pressed) : checkInput(key_pressed)
    }

    // key_pressed === "others" ? answer = "Ready" : equation_array.length == 0 ? checkFirstInput(key_pressed) : checkInput(key_pressed);
}

function checkFirstInput(entry) {
    // entry[0] === 'n' || entry[0] === 'd' ? equation_array[0] = entry[1] : answer = "Ready";

    if (entry[0] === 'n' || entry[0] === 'd') {
        equation_array[0] = entry[1]
    }

    if (equation_array[0] !== '.') {
        current_key = entry;
        current_number_value = entry[1];
        $('.display_section h1').text(equation_array[0]);
    } else {
        current_key = entry;
        current_number_value = "0" + entry[1];
        $('.display_section h1').text("0.");
    }

    console.log(equation_array);
}

function checkInput(entry) {
    previous_key = current_key;
    previous_number_value = current_number_value;
    current_key = entry;
    current_number_value = "";
    equation_array.push(current_key[1]);
    console.log(equation_array);
    var type_of_previous_key = previous_key[0];
    var type_of_current_key = entry[0];


    if (type_of_previous_key === 'n' && type_of_current_key === 'n') {
        nn();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'n' && type_of_current_key === 'o') {
        no();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'n' && type_of_current_key === 'd') {
        nd();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'n' && type_of_current_key === 'e') {
        ne();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'o' && type_of_current_key === 'n') {
        on();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'o' && type_of_current_key === 'o') {
        oo();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'o' && type_of_current_key === 'd') {
        od();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'o' && type_of_current_key === 'e') {
        oe();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'e' && type_of_current_key === 'n') {
        en(current_key);
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'e' && type_of_current_key === 'o') {
        eo();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'e' && type_of_current_key === 'd') {
        ed();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'e' && type_of_current_key === 'e') {
        ee();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'd' && type_of_current_key === 'n') {
        dn();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'd' && type_of_current_key === 'o') {
        do$();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'd' && type_of_current_key === 'd') {
        dd();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'd' && type_of_current_key === 'e') {
        de();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'x' && type_of_current_key === 'n') {
        xn();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'x' && type_of_current_key === 'o') {
        xo();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'x' && type_of_current_key === 'd') {
        xd();
        $('.display_section h1').text(current_number_value);
    } else if (type_of_previous_key === 'x' && type_of_current_key === 'e') {
        xe();
        $('.display_section h1').text(current_number_value);
    }

    if (type_of_current_key === 'q') {
        clearCalc();
        $('.display_section h1').text('Ready');
    }

    if (type_of_current_key === 'x') {
        clearCurrentNumber();
        $('.display_section h1').text('0');
    }

}

function clearCalc() {
    current_key = null;
    previous_key = null;
    current_number_value = null;
    previous_number_value = null;
    number_behind_operator = null;
    number_holder_multiple_entry = null;
    operator = null;
    equation_array = [];
    $('.display_section h1').text('Ready');
}

function clearCurrentNumber() {
    current_number_value = "";
}

function compute(num1, num2, operator) {
    console.log(num1);
    console.log(num2);

    var answer;
    switch (operator) {
        case "+":
            answer = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            answer = parseFloat(num1) - parseFloat(num2);
            break;
        case "×":
            answer = parseFloat(num1) * parseFloat(num2);
            break;
        case "÷":
            if (num2 === "0") {
                answer = "Error";
                clearCalc();
                break;
            } else {
                answer = parseFloat(num1) / parseFloat(num2);
            }
            break;
    }
    return answer;
}

function nn() {
    current_number_value = previous_number_value + current_key[1];
}

function no() {
    if (operator === null) {
        operator = current_key[1];
        number_behind_operator = previous_number_value;
        current_number_value = previous_number_value;
    } else {
        current_number_value = compute(number_behind_operator, previous_number_value, operator,).toString();
        if (current_number_value !== 'Error') {
            number_behind_operator = current_number_value;
            operator = current_key[1];
        }
    }
}

function nd() {
    previous_number_value.indexOf('.') > -1 ? current_number_value = previous_number_value : current_number_value = previous_number_value + ".";
}

function ne() {
    if (operator !== null) {
        current_number_value = compute(number_behind_operator, previous_number_value, operator).toString();
        number_behind_operator = current_number_value;
        number_holder_multiple_entry = previous_number_value;
    } else {
        current_number_value = previous_number_value;
    }
}

function on() {
    current_number_value = current_key[1];
}

function oo() {
    current_number_value = previous_number_value;
    operator = current_key[1];
}

function od() {
    current_number_value = "0.";
}

function oe() {
    current_number_value = compute(previous_number_value, previous_number_value, operator);
}

function en(current_key) {
    clearCalc();
    checkFirstInput(current_key)
}

function eo() {
    current_number_value = previous_number_value;
    number_behind_operator = current_number_value;
    operator = current_key[1];
}

function ee() {
    if (number_holder_multiple_entry !== null) {
        current_number_value = compute(previous_number_value, number_holder_multiple_entry, operator).toString();
        number_behind_operator = current_number_value;
    } else {
        current_number_value = previous_number_value;
    }
}

function ed() {
    operator = null;
    current_number_value = "0.";
}

function dn() {
    current_number_value = previous_number_value + current_key[1];
}

function do$() {
    if (operator !== null) {
        current_number_value = compute(number_behind_operator, previous_number_value, operator).toString();
        number_behind_operator = current_number_value;
        number_holder_multiple_entry = previous_number_value;
        operator = current_key[1];
    } else {
        current_number_value = previous_number_value;
        number_behind_operator = previous_number_value;
        operator = current_key[1];
    }
}

function dd() {
    current_number_value = previous_number_value;
}

function de() {
    if (operator !== null) {
        current_number_value = compute(number_behind_operator, previous_number_value, operator).toString();
        number_behind_operator = current_number_value;
        number_holder_multiple_entry = previous_number_value;
    } else {
        current_number_value = previous_number_value;
    }
}

function xn() {
    current_number_value = current_key[1];
}

function xo() {
    current_number_value = "0";
    operator = current_key[1];
}

function xd() {
    current_number_value = "0.";
}

function xe() {
    if (operator !== null) {
        current_number_value = compute(number_behind_operator, "0", operator).toString();
        number_behind_operator = current_number_value;
        number_holder_multiple_entry = previous_number_value;
    } else {
        current_number_value = previous_number_value;
    }
}
