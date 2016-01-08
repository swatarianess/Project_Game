function convertEq(num1, num2, sign, ans) {
    if (num1 === undefined || num2 === undefined || sign === undefined) {
        num1 = 2;
        num2 = 3;
        sign = 0.5;
    }

    var newNum1 = Math.floor(num1);
    var newNum2 = Math.floor(num2);
    var newSign = "";

    if (typeof ans === "string") {
        if (sign < 1) {
            newSign = "+";
        } else if (sign < 2) {
            newSign = "-";
        } else if (sign < 2.5) {
            newSign = "*";
        } else {
            newSign = "/";
        }
    } else {
        if (sign < 1) {
            newSign = "+";
            newNum2 = ans - newNum1;
        } else if (sign < 2) {
            newSign = "-";
            newNum2 = newNum1 - ans;
        } else if (sign < 2.5) {
            newSign = "*";
            newNum2 = ans / newNum1;
        } else {
            newSign = "/";
            newNum2 = newNum1 / ans;
        }
    }

    return newNum1 + " " + newSign + " " + newNum2;
}

function checkEq(eq) {
    if (eq === undefined) {
        eq = [3, "-", 2];
    }

    if (eq[2] % 1 !== 0) {
        return false;
    }

    var num1 = parseInt(eq[0]),
        num2 = parseInt(eq[2]),
        sign = eq[1];

    switch (sign) {
        case "+":
            if (num1 + num2 < 0) {
                return false;
            }
            break;
        case "-":
            if (num1 - num2 < 0) {
                return false;
            }
            break;
        case "/":
            if (num1 % num2 !== 0 || num2 > 12) {
                return false;
            }
            break;
        case "*":
            if (num1 > 12 || num2 > 12) {
                return false;
            }
            break;
    }

    return true;
}

function genEq(ans) {
    do {
        var num1 = Math.random() * 10 * diff + Math.floor(lvl / 4 - 0.01) * 10,
            num2 = (Math.random() * 10 * diff + Math.floor(lvl / 4 - 0.01) * 10) * 2 - (10 * diff + Math.floor(lvl / 4 - 0.01) * 10),
            sign = Math.random(),
            eq;
        if (diff === 3) {
            sign *= 3;
        } else {
            sign *= 2;
        }
        if (ans !== undefined) {
            eq = convertEq(num1, num2, sign, ans);
        } else {
            eq = convertEq(num1, num2, sign, "nope");
        }
        var splitEq = eq.split(" ");
    } while (!checkEq(splitEq));

    return eq;
}

/**
 * Assigns equation to all the boxes in the level, as well as the right answer to theGoal, in the form of a string.
 */
function assignEquation(){
    var eq = genEq(),
        ans = eval(eq);

    theGoal.ans = ans;

    for (var i = 0; i < objects.length; i++) {
        if (objects[i].correct) {
            objects[i].equation = genEq(ans);
        } else {
            do {
                eq = genEq();
            } while (eval(eq) === ans);
            objects[i].equation = eq;
        }
    }
}