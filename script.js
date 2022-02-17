
// let resultDOM = '<tr>'

// resultDOM += 

// とりあえず一行できたやつ
// let  = '<tr>';

// let num1 = 1

// function increment() {
//     const targetNum = 100
//     return num1 += targetNum
// }
// console.log(num1, targetNum) // 1
// increment()
// console.log(num1) // 101

function resultDOM() {
const table = document.getElementById('calendar');

// 本日の日時の変数(日時を省略した場合は現在の日時を取得する)
const today = new Date();

// 月の値を0から11で取得する。なので+1をする
const month = today.getMonth() + 1;

// 年の値を取得する
const year = today.getFullYear();

// 日の値を取得する
// const date = today.getDate();

// 曜日を取得する0から6
// const day = today.getDay();

// 表示する月の最初の日を取得
const firstDate = new Date(year,month - 1, 1);

// 最初の曜日を取得
const firstDay =firstDate.getDay();

// 表示する月の最後の日を取得。0を第三引数に持ってくることで次の月の前の日、つまり今月末を取得する
const lastDate = new Date(year,month,0);
const lastDateCount = lastDate.getDate();
// console.log(lastDateCount);

let dayCount = 1;
let createTable = '';

createTable += '<table class="collapse">' + '<tr>';
const week = ['日','月','火','水','木','金','土'];
for (let i = 0; i < week.length; i++){
    createTable += `<th>${week[i]}</th>`;
}
createTable += '</tr>';

// 行数を指定する
for (let n = 0; n < 5; n++){

    createTable += '<tr>';
     for (let d = 0; d < 7; d++){
        if(n === 0 && d < firstDay){
            createTable += '<td></td>';
    　　 }else if (dayCount > lastDateCount) {
         createTable += '<td></td>';
        } else {
            createTable += '<td>' + dayCount + '</td>';
            dayCount++;
        }
    }
    createTable += '</tr>';
}
createTable += '</table>';

table.innerHTML = createTable;
}

resultDOM()
// const table = document.getElementById('table');
// function test() {
//     const week = ['日','月','火','水','木','金','土'];
//     let resultDOM = ''// global
//     for(let tr = 0; tr < 4; tr++) {
//         resultDOM += '<tr>' // trーーーーーーー
//         for(let i =0; i<7; i++) {
//             if(tr ===0){
//                 resultDOM +=`<th>${week[i]}</th>`
//             }else{ 
                
//                 resultDOM += `<td>${date}</td>`;
//             }
//         }
//         resultDOM += '</tr>' // trーーーーーーー
//     }
//     table.innerHTML = resultDOM;
// }

// test()
// let resultDOM = ''
// for (let tr = 0; tr < 4; tr++) {
//     resultDOM += '<tr>'
//     if(tr === 0) {
//         for(let th = 0; th < 7; th++) {
//             resultDOM += '<th></th>'
//         }
//     } else {
//         for (let td = 0; td < 7; td++) {
//             resultDOM += '<td></td>'
//         }
//         resultDOM += '</tr>'
//     }
// }
// table.innerHTML = resultDOM;

// // カンニングしたら想像してたやつが出来ちゃったやつ(要素をぶち込む方法)
// let createTable = document.getElementById('table');
// for(let i = 0; i < 4; i++) {
//     let tr = document.createElement('tr');
//     for(let j = 0; j < 7; j++) {
//         let td = document.createElement('td');
//         td.innerHTML = '日付と曜日を入れる予定';
//         tr.appendChild(td);
//     }
//     createTable.appendChild(tr);




// memo
// for(let j = 0; j<4; j++) {
//    document.getElementById('table').innerHTML = createTable;
//     }

// trの中にtdを7つ入れ込む→4回行う



 