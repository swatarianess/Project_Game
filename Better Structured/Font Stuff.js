/**
 * Source: http://www.samclarke.com/2013/06/javascript-is-font-available/
 */
(function (document) {
    var calculateWidth, monoWidth, serifWidth, sansWidth, width;
    var body          = document.body;
    var container     = document.createElement('div');
    var containerCss  = [
        'position:absolute',
        'width:auto',
        'font-size:128px',
        'left:-99999px'
    ];

    // Create a span element to contain the test text.
    // Use innerHTML instead of createElement as it's smaller
    container.innerHTML = '<span style="' + containerCss.join(' !important;') + '">' +
        Array(100).join('wi') +
        '</span>';
    container = container.firstChild;

    calculateWidth = function (fontFamily) {
        container.style.fontFamily = fontFamily;

        body.appendChild(container);
        width = container.clientWidth;
        body.removeChild(container);

        return width;
    };

    // Pre calculate the widths of monospace, serif & sans-serif
    // to improve performance.
    monoWidth  = calculateWidth('monospace');
    serifWidth = calculateWidth('serif');
    sansWidth  = calculateWidth('sans-serif');

    window.isFontAvailable = function (fontName) {
        return monoWidth !== calculateWidth(fontName + ',monospace') ||
            sansWidth !== calculateWidth(fontName + ',sans-serif') ||
            serifWidth !== calculateWidth(fontName + ',serif');
    };
})(document);

/**
 * Changes the font to user input. Uses "Old English Text MT" if the font doesn't exist.
 */
function changeFont() {
    font = prompt("Please enter a font:", "Old English Text MT");
    if (font === null) {
        font = "Old English Text MT";
    } else if (!isFontAvailable(font)) {
        alert("That font is not available. Switching to default.");
        font = "Old English Text MT";
    }
    fontChanged = true;
}

/**
 * Changes the font size to user input. Reverses changes if user input isn't a number, or user input is lower than 1.
 */
function changeFontSize() {
    var oldSize = fontSize;

    fontSize = prompt("Please enter a font size (must be a number higher than or equal to 1):", fontSize.toString());
    if (fontSize === null) {
        fontSize = oldSize;
    }
    fontSize -= 1;
    fontSize += 1;
    if (!(fontSize - 0.1)) {
        alert("That's not a number. Reversing changes.");
        fontSize = oldSize;
    }
    if (fontSize < 1) {
        alert("That number's smaller than 1. Reversing changes.");
        fontSize = oldSize;
    }
    fontChanged = true;
}
