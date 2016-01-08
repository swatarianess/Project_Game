function drawGoalFrame() {
    goalContext.save();
    var goalGrad = goalContext.createLinearGradient(0, 0, 0, goalCanvas.height);
    goalGrad.addColorStop(theGoal.topColour, utils.colorToRGB("#F84A57", 0));
    goalGrad.addColorStop(1, utils.colorToRGB("#F84A57", theGoal.transp));
    goalContext.fillStyle = goalGrad;
    goalContext.clearRect(0, 0, goalCanvas.width, goalCanvas.height);
    goalContext.fillRect(0, 0, goalCanvas.width, goalCanvas.height);
    goalContext.restore();

    theGoal.updateAnimation();
}

function drawPowerupFrame() {
    powerupContext.save();
    var grd = powerupContext.createRadialGradient(powerupCanvas.width / 2, powerupCanvas.height / 2, 10,
                                                  powerupCanvas.width / 2, powerupCanvas.height / 2, powerUp.radius);
    grd.addColorStop(0, utils.colorToRGB(powerUp.colour, 1));
    grd.addColorStop(1, utils.colorToRGB(powerUp.colour, 0));
    powerupContext.fillStyle = grd;
    powerupContext.clearRect(0, 0, powerupCanvas.width, powerupCanvas.height);
    powerupContext.fillRect(0, 0, powerupCanvas.width, powerupCanvas.height);
    powerupContext.restore();

    powerUp.updateAnimation();
}