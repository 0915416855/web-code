// 绑定点击事件，获取输入值
function get_input_value() {
    // 获取input输入值
    var mine_f = document.getElementById("mine-f").value;
    var mine_n = document.getElementById("mine-n").value;
    // console.log(mine_f, mine_n)
    var array = [mine_f, mine_n];
    // console.log(array)
    return array
}

// 创建全局变量接收get_input_value()返回值
var infoAry = get_input_value()

//创建表格函数
function createTable(rowCount, colCount) {
    var table = document.getElementById("field");
    empty(table);			//每次创建都要先清空表格
    for (var i = 0; i < rowCount; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < colCount; j++) {
            var td = document.createElement('td');
            // console.log(td);
            td.id = 'm_' + i + '_' + j;     //绑定一个id
            
            // td.innerHTML = shuffle(i,j)
            if(shuffle(i,j) === 9){
                td.classList.add('landMine')    
            }
            else{
                td.classList.add('normal')
            }

            tr.appendChild(td);    
        }
        table.appendChild(tr);
    }
};

//清空子节点
function empty(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
};

// 绑定点击事件，输入完成后，将div隐藏
var level = document.querySelector("#level")
// console.log(level.style)
level.onclick = function (e) {
    var e = e || window.event; //浏览器兼容性 
    var elem = e.target || e.srcElement;
    // console.log(elem.id)
    if (elem.id && elem.id == 'submint') {
        this.style.display = "none";
        createTable(infoAry[0], infoAry[0])
    }
}



// 布雷
function shuffle(i,j) {
    // 表格转化为数组
    var tableAry = new Array(infoAry[0] * infoAry[0])
    // console.log(tableAry)
    for (let i = tableAry.length - 1; i >= 0; i--){
        tableAry[i]=0
    }
    
    for(let j = 0 ;j < 10 ; j++ ){
        var random = Math.floor(Math.random()*tableAry.length)+1
        tableAry[random] = 9
    }

    let newArr = []
    const total = Math.ceil(tableAry.length / infoAry[0])
    // console.log(total);
    for (let i = 0; i < total; i++) {
        a = tableAry.slice(i * infoAry[0], (i + 1) * infoAry[0])
        newArr.push(a)
    }
    console.log(newArr)
    // console.log(tableAry)
    return newArr[i][j]
}



