//用字面量方式声明数组Array 中括号
// 用【字面量】方式声明数组Array 【中括号】
let team = ['张三', '李四', '王五', '赵六'];
console.log(typeof(team));
console.log(team);
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers));
console.log(numbers);
let elements = ['niewei', 18, true];//三种数据类型
console.log(typeof(elements));
console.log(elements);

//用Arrary容器/结构 的【构造函数】声明数组
let team2 = new Array();
console.log(typeof(team2));
console.log(team2);

let team3 = new Array('张三', '李四', '王五', '赵六');
console.log(typeof(team3));
console.log(team3);

// 分支结构：条件语句--判断真假--结果是布尔值  
// 【比较运算符】
// console.log(1 = "1");
console.log(1 == "1"); // 字面量相等
console.log(1 === "1"); // 类型相等
console.log(1 >= 0);
console.log(1 >= 2);
// 【逻辑运算符】
console.log(1 == "1" && 1 >= 0);// 与运算符：都为true才为true，有一个为false就为false
console.log(1 === "1" || 1 >= 2);// 或运算符：有一个为true就为true，都为false才为false
console.log(!1 == "1");// 非运算符：取反，true变false，false变true

// 分支结构：条件语句-if语句  判断成绩是否及格
let score = 60
if (score >= 60) {
    console.log(`成绩${score},及格`);
} else {
    console.log(`成绩${score},不及格`);
}
