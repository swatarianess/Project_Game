function titleScreen() {
    var golo = new Box(scaleWidth(logo.width), scaleHeight(logo.height)),
        mouse = utils.captureMouse(c),
        buttonPlay = new Box(scaleWidth(230 * 0.55), scaleHeight(55), "green");

    buttonPlay.src = buttons;
    buttonPlay.sourceHeight = 100;
    buttonPlay.sourceWidth = 230;
    buttonPlay.x = c.width / 2 - buttonPlay.halfWidth();
    buttonPlay.y = scaleHeight(190);

    var buttonEasy = Object.create(buttonPlay),
        buttonMed = Object.create(buttonPlay),
        buttonHard = Object.create(buttonPlay),
        buttonInstr = Object.create(buttonPlay),
        buttonCred = Object.create(buttonPlay),
        buttonBack = Object.create(buttonPlay);

    c.addEventListener("click", clickHandler, false);

    drawBackground(4);

    golo.src = logo;
    golo.sourceWidth = logo.width;
    golo.sourceHeight = logo.height;
    golo.x = c.width / 2 - golo.halfWidth();
    golo.y = scaleHeight(10);

    buttonEasy.sourceY = buttons.height / 9 * 6;
    buttonEasy.x = c.width / 2 - buttonEasy.halfWidth();
    buttonEasy.y = c.height / 2 - (buttonEasy.height + buttonEasy.halfHeight());

    buttonMed.sourceY = buttons.height / 9 * 7;
    buttonMed.x = c.width / 2 - buttonMed.halfWidth();
    buttonMed.y = c.height / 2 - buttonMed.halfHeight();

    buttonHard.sourceY = buttons.height / 9 * 8;
    buttonHard.x = c.width / 2 - buttonHard.halfWidth();
    buttonHard.y = c.height / 2 + buttonMed.halfHeight();

    buttonInstr.sourceY = buttons.height / 9;
    buttonInstr.x = c.width / 2 - buttonInstr.halfWidth();
    buttonInstr.y = scaleHeight(265);

    buttonCred.sourceY = buttons.height / 9 * 2;
    buttonCred.x = c.width / 2 - buttonCred.halfWidth();
    buttonCred.y = scaleHeight(335);

    buttonBack.sourceY = buttons.height / 9 * 3;
    buttonBack.x = c.width - buttonBack.width;
    buttonBack.y = c.height - buttonBack.height;

    switch (titleState) {
        case TITLE:
            golo.draw();
            buttonPlay.draw();
            buttonInstr.draw();
            buttonCred.draw();
            break;
        case DIFF_SEL:
            golo.draw();
            buttonEasy.draw();
            buttonMed.draw();
            buttonHard.draw();
            buttonBack.draw();
            break;
        case INSTR:
            c.removeEventListener("click", clickHandler, false);
            drawInstructions(buttonBack, mouse, 1);
            break;
        case CREDITS:
            drawCredits();
            buttonBack.draw();
            break;
        default:
            titleState = TITLE;
            buttonPlay.draw();
            buttonInstr.draw();
            buttonCred.draw();
    }

    function clickHandler() {
        if (titleState === TITLE && utils.containsPoint(buttonPlay, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            titleState = DIFF_SEL;
            titleScreen();
        } else if (titleState === DIFF_SEL && utils.containsPoint(buttonEasy, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            diff = 1;
            titleState = TITLE;
            gameState = BUILD_MAP;
            update();
        } else if (titleState === DIFF_SEL && utils.containsPoint(buttonMed, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            diff = 2;
            titleState = TITLE;
            gameState = BUILD_MAP;
            update();
        } else if (titleState === DIFF_SEL && utils.containsPoint(buttonHard, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            diff = 3;
            titleState = TITLE;
            gameState = BUILD_MAP;
            update();
        } else if (titleState === TITLE && utils.containsPoint(buttonInstr, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            titleState = INSTR;
            titleScreen();
        } else if (titleState === TITLE && utils.containsPoint(buttonCred, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            titleState = CREDITS;
            titleScreen();
        } else if (titleState !== TITLE && utils.containsPoint(buttonBack, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            titleState = TITLE;
            titleScreen();
        }
    }
}

function drawCredits() {
    var marikCredit = ["Marik Boswijk:", "Head keyboard-smasher"],
        stephenCredit = ["Stephen Adu:", "Lackey keyboard-smasher"],
        talCredit = ["Tal Buaron:", "Leveral design"],
        suliemanCredit = ["Sulieman Omer:", "Made things look pretty"],
        alexCredit = ["Alexandru Rosca:", "Made other things look pretty"],
        credits = [marikCredit, stephenCredit, talCredit, suliemanCredit, alexCredit],
        lineY = c.height / 9 * 3;

    ctx.save();
    ctx.font = "80px \"" + font + "\" Arial";
    ctx.fillStyle = "orange";
    ctx.textAlign = "center";
    ctx.lineWidth = 2;
    ctx.fillText("Credits", c.width / 2, c.height / 6);
    ctx.strokeText("Credits", c.width / 2, c.height / 6);

    ctx.font = "50px \"" + font + "\" Arial";
    ctx.linewidth = 0.1;
    for (var i = 0; i < credits.length; i++) {
        ctx.textAlign = "left";
        ctx.fillText(credits[i][0], 10, lineY, c.width / 2 - 10);
        ctx.strokeText(credits[i][0], 10, lineY, c.width / 2 - 10);
        ctx.textAlign = "right";
        ctx.fillText(credits[i][1], c.width - 10, lineY, c.width / 2 - 10);
        ctx.strokeText(credits[i][1], c.width - 10, lineY, c.width / 2 - 10);
        lineY += 60;
    }
    ctx.restore();
}

function drawInstructions(buttonBack, mouse, page) {
    var scroll = new Box(c.width * 0.75, c.height),
        buttonNextPage = Object.create(buttonBack),
        buttonPrevPage = Object.create(buttonBack);

    scroll.src = emptyScroll;
    scroll.sourceHeight = scroll.src.height;
    scroll.sourceWidth = scroll.src.width;
    scroll.x = c.width / 8;

    buttonNextPage.sourceY = buttons.height / 9 * 4;
    buttonNextPage.x = c.width - buttonNextPage.width;
    buttonNextPage.y = c.height / 2 - buttonNextPage.halfHeight();

    buttonPrevPage.sourceY = buttons.height / 9 * 5;
    buttonPrevPage.x = 0;
    buttonPrevPage.y = c.height / 2 - buttonPrevPage.halfHeight();

    drawBackground(4);
    scroll.draw();

    c.addEventListener("click", clickHandler, false);

    var lineY = scroll.height * 0.15625,
        maxLineWidth = scroll.width - scroll.width / 5,
        parGap = 20,
        firstPar = 0,
        currentPar = 0,
        currentLine,
        lastPar = 0,
        words = ["Cthulhu", "has", "awoken", "from", "his", "slumber.", "He", "will", "bring", "doom",
            "to", "this", "world", "unless", "he", "can", "be", "appeased.", "You,", "in",
            "your", "infinite", "wisdom,", "have", "decided", "to", "try", "to", "appease", "him",
            "by", "teaching", "him", "simple", "math.", 0, "You", "have", "found", "many",
            "holes", "into", "Cthulhu's", "underworld.", "Cthulhu", "will", "provide", "you", "with", "numbers",
            "from", "them.", "You", "must", "push", "the", "boxes", "with", "the", "right",
            "equations", "into", "the", "holes", "before", "Cthulhu", "gets", "bored", "of", "your",
            "antics", "and", "destroys", "all", "of", "humanity", "in", "a", "terrifying", "catastrophe.",
            "Cthulhu", "will", "surround", "you", "with", "impassable", "walls", "to", "ensure", "you",
            "don't", "leave", "before", "that", "that", "task", "is", "finished.", 0, "But",
            "watch", "out", "for", "Cthulhu's", "minions.", "Touching", "them", "will", "displease", "Cthulhu.",
            "In", "his", "wrath,", "he", "will", "force", "you", "to", "restart", "the",
            "level.", "Dropping", "boxes", "on", "them", "will", "kill", "them.", 0, "Sometimes,",
            "Cthulhu", "will", "see", "fit", "to", "bestow", "upon", "you", "a", "pulsating",
            "orb.", "Touching", "this", "orb", "can", "have", "various", "effects,", "depending", "on",
            "its", "colour.", "What", "exactly", "each", "colour", "does,", "only", "Cthulhu", "knows.",
            "Will", "you", "dare", "to", "take", "the", "risk?", 0, "Move", "by",
            "using", "the", "A", "and", "D", "keys,", "or", "the", "left", "and",
            "right", "arrow", "keys.", "Jump", "by", "pressing", "the", "W,", "the", "up",
            "arrow,", "or", "the", "space", "key.", "Pressing", "R", "or", "enter", "key",
            "will", "let", "you", "reset", "the", "level.", "Pressing", "either", "shift", "key",
            "will", "pause", "reality", "until", "you", "hit", "it", "again."];

    ctx.save();
    ctx.font = fontSize + "px \"" + font + "\" Arial";
    ctx.textAlign = "center";

    if (fontChanged) {
        separateWords(font, fontSize, maxLineWidth, words);
        separatePages(font, fontSize, parGap, scroll.height * 0.73);
        fontChanged = false;
    }

    var lastPage = parsPerPage.length;

    for (var i = 0; i < page - 1; i++) {
        firstPar += parsPerPage[i];
    }

    i = 0;
    while (currentPar < firstPar) {
        while (lines[i]) {
            i++;
        }
        i++;
        currentPar++;
    }
    currentLine = i;

    for (i = 0; i < page; i++) {
        lastPar += parsPerPage[i];
    }

    i = firstPar;
    while (i < lastPar) {
        ctx.fillText(lines[currentLine], scroll.x + scroll.width / 2, lineY);
        lineY += fontSize;
        currentLine++;

        if (!lines[currentLine]) {
            i++;
            currentLine++;
            lineY += parGap;
        }
    }

    if (page === lastPage) {
        lineY += fontSize + parGap;
        ctx.font = fontSize * 2 + "px \"" + font + "\" Arial";
        ctx.fillText("Good luck.", c.width / 2, lineY, maxLineWidth);
    }

    if (page < lastPage) {
        buttonNextPage.draw();
    }
    if (page > 1) {
        buttonPrevPage.draw();
    }
    buttonBack.draw();

    ctx.restore();

    function clickHandler() {
        if (page < lastPage && utils.containsPoint(buttonNextPage, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            drawInstructions(buttonBack, mouse, page + 1);
        } else if (page > 1 && utils.containsPoint(buttonPrevPage, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            drawInstructions(buttonBack, mouse, page - 1);
        } else if (utils.containsPoint(buttonBack, mouse.x, mouse.y)) {
            c.removeEventListener("click", clickHandler, false);
            titleState = TITLE;
            titleScreen();
        }
    }
}

function separateWords(font, fontSize, maxLineWidth, words) {
    var currentWord = 0,
        line = "";
    lines = [];

    ctx.save();
    ctx.font = fontSize + "px \"" + font + "\" Arial";

    while (currentWord < words.length) {
        while (words[currentWord]) {
            line = words[currentWord];
            currentWord++;
            while (words[currentWord] && ctx.measureText(line + " " + words[currentWord]).width < maxLineWidth) {
                line += " " + words[currentWord];
                currentWord++;
            }
            lines.push(line);
        }
        lines.push(0);
        currentWord++;
    }

    ctx.restore();
}

function separatePages(font, fontSize, parGap, maxPageHeight) {
    var pagePars = [],
        pageLines = [],
        par = [],
        i = 0,
        oldI,
        check = true;

    parsPerPage = [];

    ctx.save();
    ctx.font = fontSize + "px \"" + font + "\" Arial";

    while (i < lines.length) {
        check = true;
        while (lines[i] && check) {
            oldI = i;
            par = [];
            while (lines[i]) {
                par.push(lines[i]);
                i++;
            }
            if (pageLines.length === 0 || pageLines.length * fontSize + par.length * fontSize + (pagePars.length - 1) * parGap < maxPageHeight) {
                for (var j = 0; j < par.length; j++) {
                    pageLines.push(par[j]);
                }
                pagePars.push(par);
                i++;
            } else {
                i = oldI;
                check = false;
            }
        }
        parsPerPage.push(pagePars.length);
        pageLines = [];
        pagePars = [];
    }

    ctx.restore();
}