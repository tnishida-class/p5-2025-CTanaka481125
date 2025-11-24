// 心臓の鼓動のようなアニメーション
//共通の定数や変数として、初めに定数や変数を宣言
const cycle = 100; // 1周期のフレーム数を設定
let count = 0; // 現在のフレーム数を設定
let size = 50; //現在の円の大きさを設定　

function setup(){ //初めに1回だけ行う処理を定義
  createCanvas(200, 200);
  count = 0; //現時点でのフレーム数を0とする
}

function draw(){  
  background(160, 192, 255);
  
  //let speed = 1; // アニメーションの速さ
  // BLANK[2]

  count = (count + 1) % cycle; 
  //countを1ずつ増やしながら、無限に大きくなってしまわないように
  //1周期のフレーム数で割って、値を0～99の間で繰り返しさせている。

  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる

  if (keyIsPressed){
    count = (count + 2) % cycle;
  }
  //キーが押されたときにフレームが増える速度を速くしている

  //if (count < cycle / 2){
    //size += 1;
  //} else {
    //size -= 1;
  //}

  if(count < cycle/ 2){
    size = 50 + cycle - count; 
  } else {
    size = 50 + count;
  }

  ellipse(width / 2, height / 2, size);
}
