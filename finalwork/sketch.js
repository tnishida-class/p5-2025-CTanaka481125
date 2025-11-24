// 最終課題を制作しよう
let x, y, vx, vy, a, b
let blocks = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 3;
  a = width /2
  b = height - 90
  
  let blockCount = 20;
  for (let i = 0; i < blockCount; i++) {
    let w = 60;
    let h = 30;
    let overlap = true;
    let newBlock;
  
    while (overlap) {
      overlap = false;
  
      let bx = random(30, width - 30 - w);
      let by = random(50, height / 2);
  
      newBlock = { x: bx, y: by, w: w, h: h };
  
      for (let j = 0; j < blocks.length; j++) {
        let b = blocks[j];
        if (
          newBlock.x < b.x + b.w &&
          newBlock.x + newBlock.w > b.x &&
          newBlock.y < b.y + b.h &&
          newBlock.y + newBlock.h > b.y
        ) {
          overlap = true;
          break;
        }
      }
    }
    blocks.push(newBlock);
  }
}
function draw(){
  background(160, 192, 255);


  //円
  fill(255);
  ellipse(x, y, 30);


  //壁
  noStroke();
  fill(134, 74, 43);
  rect(0, 0, 30, height);
  rect(0, 0, width, 30);
  rect(width - 30, 0, 30, height);

  //ブロック
  fill(122);
  for(let i = 0; i < blocks.length; i++){
    let b = blocks[i];
    rect(b.x, b.y, b.w, b.h);

    let nearestX = constrain(x, b.x, b.x + b.w)
    let nearestY = constrain(y, b.y, b.y + b.h)

    let dx = x - nearestX;
    let dy = y - nearestY;

    if(dx * dx + dy * dy < 15 *15){
      blocks.splice(i, 1);

      if(abs(dx) > abs(dy)){
        vx *= -1;
      } else {
        vy *= -1;
      }
    }
  }
  
  //動く長方形
  fill(0);
  rect(a, b, 60, 15);
  if(keyIsDown(LEFT_ARROW)){a -= 10;}
  if(keyIsDown(RIGHT_ARROW)){a += 10;}

  //長方形の範囲
  a = constrain(a, 30, width - 90)  

  //円の移動
  prevY = y;
  x += vx;
  y += vy;


  //壁で反射する
  if(x < 30 + 15 || x > width - (30 + 15)){vx = -1 * vx;}
  if(y < 30 + 15){vy = -1 * vy;}

  //衝突判定
  if(
    x + 15 > a &&
    x - 15 < a + 60 &&
    y + 15 >= b &&
    prevY + 15 < b
  ){
    y = b - 15;
    vy *= -1;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
