function drawHUD(){
    //var metrics = ctx.measureText(score);
    ctx.save();
    if (fontSize <= scaleHeight(49)) {
        ctx.font = fontSize + "px \"" + font + "\" Arial";
    } else {
        ctx.font = scaleHeight(49) + "px \"" + font + "\" Arial";
    }
    ctx.textAlign = "center";
    ctx.fillText("Level: " + lvl + " Points: " + score, c.width / 2, scaleWidth(30));
    ctx.restore();
    //1032x50 <- The rectangular space reserved for the HUD
}