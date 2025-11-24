// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){ //初めに1回だけ行う関数を定義
  createCanvas(windowWidth, windowHeight); //キャンバスの大きさをウィンドウの大きさと同じにする
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){ //ウィンドウのサイズが変更されるたびに呼び出される関数を定義
  resizeCanvas(windowWidth, windowHeight); //ウィンドウのサイズが変更された時、キャンバスをウィンドウと同じサイズにする
}

function draw(){ //画面に描く処理やアニメーションの動きを定義
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY); 

  // BLANK[1] キャラクターの左右移動
  if(keyIsDown(LEFT_ARROW)){x -= 5;}
  if(keyIsDown(RIGHT_ARROW)){x += 5;}
  if((keyIsDown(LEFT_ARROW)) && (keyIsDown("A".charCodeAt(0)))){x -= 10;}
  if((keyIsDown(RIGHT_ARROW)) && (keyIsDown("A".charCodeAt(0)))){x += 10;}

  // BLANK[2] 重力とジャンプ
  if(y < groundY - size / 2){vy += g;}
    else if(y = groundY - size / 2){
    if(keyIsDown(" ".charCodeAt(0))){vy = -1 * vy;}
    }
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  x = constrain(x, 0 + size / 2, width - size / 2)
  y = constrain (y, 0, groundY - size / 2)

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}