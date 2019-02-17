//반복문 실습

var 양의숫자 = 0;
while (양의숫자 < 10) {
    console.log("양을 " + 양의숫자 + "마리까지 셌어요!");
    양의숫자++;
}
console.log("\n" + "ZzzzzZzzzzzzz");

for ( var 건물개수 = 0; 건물개수 < 10; 건물개수++ ) {
    console.log("건물을 " + 건물개수 + "만큼" + " 가졌네요. 부러워요, 갓.물.주!")
}
console.log("\n" + "건물은 이 정도면 충분해요 : )")

//반복횟수가 정해진 for 반복문

var 감탄횟수 = 4;
for ( var i = 0; i < 감탄횟수; i++ ) {
    console.log( "맛있다!" + "\n" );
}

var 야근순서 = [ "승우", "동훈", "훈", "유정"];
for ( var i = 0; i < 야근순서.length; i++ ) {
    console.log( "올해 야근자 순서는 " + 야근순서[i] + "입니다." )
} 

var 철자 = "Exercising";
for ( var i = 0; i < 철자.length; i++ ) {
    console.log( "엑설사이징의 알파벳 철자는 " + 철자[i] + "입니다." )
}

for ( var x = 3; x < 10000; x = x * 3 ) {
    console.log( x );
}

var y = 3
while ( y < 10000 ) {
    console.log( y = y * 3 );
}


for ( var x = 5; x < 10000; x =  x * 6) {
    console.log( x );
}

//구구단 만들기, 2단
for ( var i = 1; i <= 9; i++ ) {
    console.log( i * 2 );
    }
