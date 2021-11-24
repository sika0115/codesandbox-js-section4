/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数は上書きできる";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// //let val2 = "let変数を再宣言"; //already been declared

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// //val3 = "const変数を上書き"; //read-only

// //const変数は再宣言不可
// const val3 = "const変数を再宣言"

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あああ",
//   age: 28
// };
// val4.name = "aaa"; //オブジェクトの場合は書き換え可能
// val4.address = "Hokkaido";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列：文字列内の結合で使える
 */
// const name = "あああ";
// const age = 28;
// //「私の名前はあああです。年齢は28歳です。」
// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いると...
// //バッククォートを利用, ${}の中がJSとして認識される
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// //アロー関数
// //※(str)の()は省略可能、ただし補完される
// // const func2 = (str) => {
// //   return str;
// // }
// //中の処理が単一式の場合returnを省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// //sample
// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "aaa",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //↓分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// //配列の分割代入
// const myProfile = ["aaa", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// //これを分割代入でどうかくか？
// //配列の場合は順番が大事、先頭から抜き出すため
// const [name, age] = myProfile; //順番に要素取得する
// const message4 = `なまえは${name}です。年齢は${age}。`;
// console.log(message4);

// /**
//  * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();
// //引数を消すとundefindさんになる -> デフォルト値を設定したい！
// //name = "xxx"で初期値を設定している

/**
 * スプレッド構文 ...
 * ①配列を展開し順番に処理する
 * ②配列をまとめて受け取る
 * ③配列のコピー、結合
 */

//①配列の展開
// const arr1 = [1, 2];
// console.log(arr1); //[1, 2]
// //↓展開すると...
// console.log(...arr1); //1 2

// //配列の値を受け取って足す関数
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// //↓スプレッド構文使うと...
// sumFunc(...arr1); //要素が順番に設定されるので同じ結果になる！

// //②まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3); //残った3,4,5がまとめられている

// //③配列のコピー、結合　★よく使う
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// //arr4のコピー
// const arr6 = [...arr4];
// arr6[0] = 100; //スプレッド構文でコピーしたものは更新しても元の配列の値は影響受けない
// console.log(arr6);
// console.log(arr4);
// //arr4と5の結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4); //arr8の更新でarr4が影響を受けてしまう

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "斎藤"];
// //従来のfor
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// //map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// //↑と同じことを短くかける、配列をループするのとreturn結果をループするの両方できる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// //↑２つめの引数は0から数字が入るので番号管理もできる

// //filter
// const numArr = [1, 2, 3, 4, 5];
// //filterの場合returnで条件をかけて抽出する
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;//奇数のみ配列から取り出し
// });
// console.log(newNumArr);

// //filter + ifの組み合わせ
// const newNameArr = nameArr.map((name) => {
//   if (name === "斎藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const val2 = 1 < 0 ? "trueです" : "falseです";
// console.log(val2);

// const num = 1300;
// //console.log(num.toLocaleString()); //toLocaleString -> 数値に対して金額表示のような３桁区切りしてくれる関数

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください"; //typeof -> 変数の方判定してくれる
// console.log(formattedNum);

// //関数の返り値に利用する例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100以上" : "許容範囲";
// };
// console.log(checkSum(100, 1));
// console.log(checkSum(1, 99));

/**
 * 論理演算子 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// // ||は左側がfalseになるとき右側を返す★ nullはfalseだからコメントが返ってくる
// //const num = null;
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// //※元の文でもどちらかがtrueの時通るようになっている

// // && は左側がtrueなら右側を返す　★
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
