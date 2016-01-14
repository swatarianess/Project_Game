/**
 * Created by Marik on 11/12/2015.
 * edited by Tal on a daily basis.
 */
function buildLevel() {
    switch (lvl) {
		case 1:
            player.x = scaleWidth(50);
            player.y = scaleHeight(450);

            objects[0] = Object.create(box);
            objects[0].x = scaleWidth(250);
            objects[0].y = scaleHeight(100);

            objects[1] = Object.create(box);
            objects[1].x = scaleWidth(500);
            objects[1].y = scaleHeight(100);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(750);
            objects[2].y = scaleHeight(100);

            solids[5] = Object.create(platform);
            solids[5].x = scaleWidth(200);
            solids[5].y = scaleHeight(400);
	    solids[5].width = scaleWidth(200);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(470);
            solids[6].y = scaleHeight(400);
	    solids[6].width = scaleWidth(200);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(740);
            solids[7].y = scaleHeight(400);
	    solids[7].width = scaleWidth(200);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(420);
            solids[8].y = scaleHeight(190);
	    solids[8].width = scaleWidth(200);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(150);
            solids[9].y = scaleHeight(190);
	    solids[9].width = scaleWidth(200);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(690);
            solids[10].y = scaleHeight(190);
	    solids[10].width = scaleWidth(200);
			
	    solids[11] = Object.create(platform);
            solids[11].x = scaleWidth(50);
            solids[11].y = scaleHeight(295);
	    solids[11].width = scaleWidth(50);
			
	    solids[12] = Object.create(platform);
            solids[12].x = scaleWidth(924);
            solids[12].y = scaleHeight(295);
	    solids[12].width = scaleWidth(50);
			
	    powerUp.x = scaleWidth(949);
	    powerUp.y = scaleHeight(265);
            break;
		case 2:
			player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(480);
            objects[0].y = scaleHeight(50);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(120);
            objects[1].y = scaleHeight(50);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(770);
            objects[2].y = scaleHeight(50);
			
	    solids[5] = Object.create(platform);
            solids[5].x = scaleWidth(200);
            solids[5].y = scaleHeight(440);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(90);
            solids[6].y = scaleHeight(350);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(200);
            solids[7].y = scaleHeight(260);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(330);
            solids[8].y = scaleHeight(150);
	    solids[8].width = scaleWidth(400);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(760);
            solids[9].y = scaleWidth(260);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(869);
            solids[10].y = scaleHeight(350);
			
	    solids[11] = Object.create(platform);
            solids[11].x = scaleWidth(760);
            solids[11].y = scaleHeight(440);
			
	    solids[12] = Object.create(platform);
            solids[12].x = scaleWidth(840);
            solids[12].y = scaleHeight(150);
			
	    solids[13] = Object.create(platform);
            solids[13].x = scaleWidth(90);
            solids[13].y = scaleHeight(150);
			
	    powerUp.x = scaleWidth(870);
	    powerUp.y = scaleHeight(110);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[8];
			
	    enemies[1] = Object.create(enemyPlatform);
            enemies[1].linkedObject = solids[11];
			break;
        case 3:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    solids[5] = Object.create(platform);
	    solids[5].x = scaleWidth(100);
            solids[5].y = scaleHeight(415);
			
	    solids[6] = Object.create(platform);
	    solids[6].x = scaleWidth(740);
            solids[6].y = scaleHeight(415);
			
	    solids[7] = Object.create(platform);
	    solids[7].x = scaleWidth(420);
            solids[7].y = scaleHeight(415);
			
	    solids[8] = Object.create(platform);
	    solids[8].x = scaleWidth(260);
            solids[8].y = scaleHeight(305);
	    solids[8].width = scaleWidth(400);
			
	    solids[9] = Object.create(platform);
	    solids[9].x = scaleWidth(160);
            solids[9].y = scaleHeight(185);
	    solids[9].width = scaleWidth(200);
			
	    solids[10] = Object.create(platform);
	    solids[10].x = scaleWidth(580);
            solids[10].y = scaleHeight(185);
	    solids[10].width = scaleWidth(200);
			
	    solids[11] = Object.create(platform);
	    solids[11].x = scaleWidth(850);
            solids[11].y = scaleHeight(130);
			
	    powerUp.x = scaleWidth(870);
	    powerUp.y = scaleHeight(110);

            objects[0] = Object.create(box);
            objects[0].x = scaleWidth(650);
            objects[0].y = scaleHeight(150);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(200);
            objects[1].y = scaleHeight(150);

            enemies[0] = Object.create(enemyCircle);
            enemies[0].linkedObject = solids[6];
			
	    enemies[1] = Object.create(enemyPlatform);
            enemies[1].linkedObject = solids[8];
			
	    enemies[2] = Object.create(enemyPlatform);
            enemies[2].linkedObject = solids[9];
            break;
		case 4:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(380);
            objects[0].y = scaleHeight(50);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(770);
            objects[1].y = scaleHeight(350);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(770);
            objects[2].y = scaleHeight(50);
			
	    solids[5] = Object.create(platform);
            solids[5].x = scaleWidth(80);
            solids[5].y = scaleHeight(400);
	    solids[5].width = scaleWidth(550);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(670);
            solids[6].y = scaleHeight(400);
	    solids[6].width = scaleWidth(280);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(100);
            solids[7].y = scaleHeight(270);
	    solids[7].width = scaleWidth(530);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(120);
            solids[8].y = scaleHeight(150);
	    solids[8].width = scaleWidth(510);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(670);
            solids[9].y = scaleHeight(270);
	    solids[9].width = scaleWidth(280);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(670);
            solids[10].y = scaleHeight(150);
	    solids[10].width = scaleWidth(280);
			
	    powerUp.x = scaleWidth(870);
	    powerUp.y = scaleHeight(110);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[8];
			
	    enemies[1] = Object.create(enemyPlatform);
            enemies[1].linkedObject = solids[6];
			break;
		case 5:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(520);
            objects[0].y = scaleHeight(250);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(130);
            objects[1].y = scaleHeight(50);
			
	    solids[5] = Object.create(platform);
            solids[5].x = scaleWidth(100);
            solids[5].y = scaleHeight(440);
			
	    solids[6] = Object.create(platformHor);
	    solids[6].y = scaleHeight(370);
	    solids[6].leftest = scaleWidth(200);
	    solids[6].moveWidth = scaleWidth(180);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(500);
            solids[7].y = scaleHeight(330);
			
	    solids[8] = Object.create(platformHor);
	    solids[8].y = scaleHeight(370);
	    solids[8].leftest = scaleWidth(600);
	    solids[8].moveWidth = scaleWidth(150);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(870);
            solids[9].y = scaleHeight(300);
			
	    solids[10] = Object.create(platformHor);
            solids[10].y = scaleHeight(200);
	    solids[10].leftest = scaleWidth(200);
	    solids[10].moveWidth = scaleWidth(570);
			
	    solids[11] = Object.create(platform);
            solids[11].x = scaleWidth(60);
            solids[11].y = scaleHeight(160);
			
	    powerUp.x = scaleWidth(570);
	    powerUp.y = scaleHeight(200);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[7];
			break;
		case 6:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(420);
            objects[0].y = scaleHeight(150);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(130);
            objects[1].y = scaleHeight(50);
			
	    solids[5] = Object.create(platformVert);
            solids[5].x = scaleWidth(160);
            solids[5].highest = scaleHeight(250);
	    solids[5].moveHeight = scaleHeight(200);
			
	    solids[6] = Object.create(platformHor);
            solids[6].y = scaleHeight(230);
	    solids[6].leftest = scaleWidth(650);
	    solids[6].moveWidth = scaleWidth(100);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(300);
            solids[7].y = scaleHeight(230);
	    solids[7].width = scaleWidth(300);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(70);
            solids[8].y = scaleHeight(150);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(860);
            solids[9].y = scaleHeight(140);
			
	    powerUp.x = scaleWidth(890);
	    powerUp.y = scaleHeight(120);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[7];
			break;
		case 7:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(502);
            objects[0].y = scaleHeight(100);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(130);
            objects[1].y = scaleHeight(50);
			
	    solids[5] = Object.create(platformVert);
            solids[5].x = scaleWidth(180);
            solids[5].highest = scaleHeight(350);
	    solids[5].moveHeight = scaleHeight(100);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(300);
            solids[6].y = scaleHeight(300);
			
	    solids[7] = Object.create(platformVert);
            solids[7].x = scaleWidth(180);
            solids[7].highest = scaleHeight(150);
	    solids[7].moveHeight = scaleHeight(100);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(70);
            solids[8].y = scaleHeight(150);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(860);
            solids[9].y = scaleHeight(240);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(600);
	    solids[10].y = scaleHeight(300);
			
	    solids[11] = Object.create(platform);
            solids[11].x = scaleWidth(450);
            solids[11].y = scaleHeight(300);
			
	    solids[12] = Object.create(platform);
            solids[12].x = scaleWidth(750);
            solids[12].y = scaleHeight(300);
			
	    solids[13] = Object.create(platformHor);
            solids[13].y = scaleHeight(150);
	    solids[13].leftest = scaleWidth(550);
	    solids[13].moveWidth = scaleWidth(190);
			
	    solids[14] = Object.create(platform);
            solids[14].x = scaleWidth(500);
            solids[14].y = scaleHeight(120);
	    solids[14].width = scaleWidth(40);
			
	    powerUp.x = scaleWidth(890);
	    powerUp.y = scaleHeight(120);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[10];
			break;
		case 8:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(502);
            objects[0].y = scaleHeight(100);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(130);
            objects[1].y = scaleHeight(50);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(600);
            objects[2].y = scaleHeight(250);
			
	    solids[5] = Object.create(platformVert);
            solids[5].x = scaleWidth(185);
            solids[5].highest = scaleHeight(150);
	    solids[5].moveHeight = scaleHeight(300);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(300);
            solids[6].y = scaleHeight(150);
			solids[6].width = scaleWidth(500);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(750);
            solids[7].y = scaleHeight(300);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(70);
            solids[8].y = scaleHeight(150);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(860);
            solids[9].y = scaleHeight(220);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(600);
	    solids[10].y = scaleHeight(300);
			
	    powerUp.x = scaleWidth(890);
	    powerUp.y = scaleHeight(120);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[7];
			break;
		case 9:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(365);
            objects[0].y = scaleHeight(100);
			
	    objects[1] = Object.create(box);
            objects[1].x = scaleWidth(605);
            objects[1].y = scaleHeight(100);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(195);
            objects[2].y = scaleHeight(100);
			
	    objects[3] = Object.create(box);
            objects[3].x = scaleWidth(755);
            objects[3].y = scaleHeight(100);
			
	    solids[5] = Object.create(platformVert);
            solids[5].x = scaleWidth(450);
            solids[5].highest = scaleHeight(250);
	    solids[5].moveHeight = scaleHeight(200);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(320);
            solids[6].y = scaleHeight(200);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(720);
            solids[7].y = scaleHeight(200);
			
	    solids[8] = Object.create(platform);
            solids[8].x = scaleWidth(160);
            solids[8].y = scaleHeight(200);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(830);
            solids[9].y = scaleHeight(320);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(570);
	    solids[10].y = scaleHeight(200);
			
	    powerUp.x = scaleWidth(890);
	    powerUp.y = scaleHeight(300);
			
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[9];
			break;
		case 10:
	    player.x = scaleWidth(50);
            player.y = scaleHeight(450);
			
	    objects[0] = Object.create(box);
            objects[0].x = scaleWidth(100);
            objects[0].y = scaleHeight(360);
			
			objects[1] = Object.create(box);
            objects[1].x = scaleWidth(100);
            objects[1].y = scaleHeight(180);
			
	    objects[2] = Object.create(box);
            objects[2].x = scaleWidth(870);
            objects[2].y = scaleHeight(180);
			
	    objects[3] = Object.create(box);
            objects[3].x = scaleWidth(870);
            objects[3].y = scaleHeight(360);
			
	    solids[5] = Object.create(platformVert);
            solids[5].x = scaleWidth(180);
            solids[5].highest = scaleHeight(200);
	    solids[5].moveHeight = scaleHeight(250);
			
	    solids[6] = Object.create(platform);
            solids[6].x = scaleWidth(50);
            solids[6].y = scaleHeight(380);
			
	    solids[7] = Object.create(platform);
            solids[7].x = scaleWidth(50);
            solids[7].y = scaleHeight(200);
			
	    solids[8] = Object.create(platformHor);
            solids[8].y = scaleHeight(150);
	    solids[8].leftest = scaleWidth(200);
	    solids[8].moveWidth = scaleWidth(400);
			
	    solids[9] = Object.create(platform);
            solids[9].x = scaleWidth(865);
            solids[9].y = scaleHeight(380);
			
	    solids[10] = Object.create(platform);
            solids[10].x = scaleWidth(865);
	    solids[10].y = scaleHeight(200);
			
	    solids[11] = Object.create(platformVert);
            solids[11].x = scaleWidth(730);
            solids[11].highest = scaleHeight(200);
	    solids[11].moveHeight = scaleHeight(250);
			
	    powerUp.x = scaleWidth(600);
	    powerUp.y = scaleHeight(120);
		
	    enemies[0] = Object.create(enemyPlatform);
            enemies[0].linkedObject = solids[11];
			
	    enemies[1] = Object.create(enemyPlatform);
            enemies[1].linkedObject = solids[5];
			break;
    }
}
