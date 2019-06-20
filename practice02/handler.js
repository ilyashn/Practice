function auth(form) {
    var login = form.elements.login;
    var pass = form.elements.pass;
    if (login.value.length === 0 || pass.value.length === 0) {
        alert("Enter login and password");
    } else {
        alert("Welcome, " + login.value);
    }
    return false;
}

function mod(form) {
    var elems = document.getElementsByName('mood');
    for (var i = 0; i < elems.length; i++) {
        if(elems[i].checked) {
            switch (elems[i].value) {
                case 'fine':
                    document.getElementById('text').innerHTML = "Glad you are OK!";
                    document.getElementById('text').style.backgroundColor = "#F3A568";
                    document.getElementById('text').style.border = "solid";
                    document.getElementById('text').style.borderColor = "#A24E11";
                    break;
                case 'notfine':
                    document.getElementById('text').innerHTML = "Im sorry! Hope you will be fine soon!"
                    document.getElementById('text').style.backgroundColor = "#F3A568";
                    document.getElementById('text').style.border = "solid";
                    document.getElementById('text').style.borderColor = "#A24E11";
                    break;
                case 'idk':
                    document.getElementById('text').innerHTML = "You need to get your mind in the good condition."
                    document.getElementById('text').style.backgroundColor = "#F3A568";
                    document.getElementById('text').style.border = "solid";
                    document.getElementById('text').style.borderColor = "#A24E11";
                    break;
                default:
                    break;
            }
        }
    }
}

function din() {
    var elems = document.getElementsByName("dinner");
    var order = "Your order is:\n";
    var rows = 2;
    for (var i = 0; i < elems.length; i++) {
        if(elems[i].checked) {
            order += elems[i].value + "\n";
            rows++;
        }
    }
    //alert(rows);
    document.getElementById("order").innerHTML = order;
    document.getElementById("order").rows = rows;

}

function phoneHelper(value) {
    switch (value) {
        case "p1":
            return 1;

        case "p2":
            return 2;

        case "p3":
            return 3;

        case "p4":
            return 4;

        case "p5":
            return 5;

        case "p6":
            return 6;

        case "p7":
            return 7;

        case "p8":
            return 8;

        case "p9":
            return 9;

        case "p0":
            return 0;

        default:
            return 0;
    }
}

function phone() {
    var form = document.forms.phonenumber;
    var p1 = form.elements.phone1;
    if (p1.value !== 'plus') {
        alert("Phone number must starts with plus!");
    } else {
        var sum = 0 + phoneHelper(form.elements.phone2.value) + phoneHelper(form.elements.phone3.value) + phoneHelper(form.elements.phone4.value) + phoneHelper(form.elements.phone5.value) + phoneHelper(form.elements.phone6.value) + phoneHelper(form.elements.phone7.value) + phoneHelper(form.elements.phone8.value) + phoneHelper(form.elements.phone9.value) + phoneHelper(form.elements.phone10.value) + phoneHelper(form.elements.phone11.value) + phoneHelper(form.elements.phone12.value);
        alert("WOW, if you add all digits in your number you will get " + sum);
    }
}

function text(form) {
    alert(document.getElementById("txt").value);
}