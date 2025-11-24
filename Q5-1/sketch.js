// EUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0, 0, 255);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;
    const x = 150 + cos(theta) * 60;
    const y = 100 + sin(theta) * 60;
    fill(255, 255, 0)
    star(x, y, 10);
  }
}

// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう

function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}