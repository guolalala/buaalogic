/*
 * @author: Bodan Chen
 * @Date: 2021-09-06 11:45:43
 * @LastEditors: Bodan Chen
 * @LastEditTime: 2021-09-06 15:24:02
 * @Email: 18377475@buaa.edu.cn
 */
"use strict";

var Problemdata = [{
        Id: 1,
        DeriveLen: 3,
        Equation: [
            "p>(p>p)",
            "p",
            "p>p"
        ],
        Answer: [
            "L1",
            "L2",
            "L3"
        ]
    },
    {
        Id: 2,
        DeriveLen: 3,
        Equation: [
            "p>(p>p)",
            "p",
            "p>p"
        ],
        Answer: [
            "L1",
            "L2",
            "L3"
        ]
    },
    {
        Id: 3,
        DeriveLen: 3,
        Equation: [
            "p>(p>p)",
            "p",
            "p>p"
        ],
        Answer: [
            "L1",
            "L2",
            "L3"
        ]
    },
    {
        Id: 4,
        DeriveLen: 3,
        Equation: [
            "p>(p>p)",
            "p",
            "p>p"
        ],
        Answer: [
            "L1",
            "L2",
            "L3"
        ]
    },
    {
        Id: 5,
        DeriveLen: 3,
        Equation: [
            "p>(p>p)",
            "p",
            "p>p"
        ],
        Answer: [
            "L1",
            "L2",
            "L3"
        ]
    }
];

$(function() {
    var selected = 0;
    var ProLen = Problemdata.length;
    for (let i = 1; i <= ProLen; i++) {
        var tempid = "button " + String(i);
        var temptext = "Test " + String(i);
        $("#button-container").append(
            $("<button></button>").attr({
                class: "btn",
                id: tempid,
            }).text(temptext).click(function() {
                selected = i - 1;
                //console.log(temptext);
                $("#topcards").fadeOut(400);
                $("#select-container").fadeOut(400);
                $("#check-section").fadeOut(400);
                $("#select-container").html("");

                for (let j = 0; j < Problemdata[i - 1].DeriveLen; j++) {
                    var rowitem = $("<div></div>").attr({
                        class: "Row-item",
                    }).css({
                        "z-index": ProLen - i + 1,
                    });

                    var detest = $("<div></div>").attr({ class: "equation" });
                    detest.append(
                        $("<p></p>").text(Problemdata[i - 1].Equation[j])
                    );
                    var deselect = $("<div></div>").attr({
                        class: "sel"
                    });
                    var tempselect = $("<select></select>").attr({
                        name: "select-derive",
                        id: "select-answer"
                    }).append(
                        $("<option></option>").attr({
                            value: "",
                            disabled: true,
                        }).text("Guidelines"),
                        $("<option></option>").attr({
                            value: "L1"
                        }).text("L1"),
                        $("<option></option>").attr({
                            value: "L2"
                        }).text("L2"),
                        $("<option></option>").attr({
                            value: "L3"
                        }).text("L3"),
                        $("<option></option>").attr({
                            value: "MP"
                        }).text("MP"),
                        $("<option></option>").attr({
                            value: "HS"
                        }).text("HS"),
                    );
                    deselect.append(tempselect);
                    //console.log(deselect);
                    rowitem.append(
                        detest,
                        deselect,
                        $("<hr>").attr({ class: "rule" })
                    );
                    $("#select-container").append(rowitem);
                };


                $("#check-section").fadeIn(400);
                $("#topcards").fadeIn(400);
                $("#select-container").fadeIn(400);
            })
        );
    };
    // $("#check-button").click(function) {

    // })
    $("#testbutton").click(function() {
        var user_ans = new Array();
        $("select#select-answer").each(function() {
            user_ans.push($(this).val());
        });
        //var result=

    });
});




// $(function) {
//     $(this).bind("contextmenu", functione) { // Disable right click.
//         e.preventDefault();
//     });

//     function makeSVG(tag, attrs) { // svg + jQuery 有自身特性
//         var element = document.createElementNS("http://www.w3.org/2000/svg", tag);
//         for (var k in attrs) element.setAttribute(k, attrs[k]);
//         return element;
//     }

//     function draggable(selector) {
//         var selectedElement = null;
//         var currentX = 0;
//         var currentY = 0;

//         $(selector).mousedown(functione) {
//             // save the original values
//             currentX = e.clientX;
//             currentY = e.clientY;
//             selectedElement = e.target;
//         }).mousemove(functione) {
//             // if there is an active element, move it around            
//             if (selectedElement) {
//                 var dx = parseInt(selectedElement.getAttribute("x")) + e.clientX - currentX;
//                 var dy = parseInt(selectedElement.getAttribute("y")) + e.clientY - currentY;
//                 currentX = e.clientX;
//                 currentY = e.clientY;
//                 selectedElement.setAttribute("x", dx);
//                 selectedElement.setAttribute("y", dy);
//             }
//         }).mouseup(functione) {
//             // deactivate element after setting it into its new location
//             selectedElement = null;
//         });
//     };

//     var result = new Array();

//     function is_same(arr1,  arr2) {
//         let len1   = arr1.length
//         let len2   = arr2.length
//         if (len1 != len2) {
//             return false
//         }
//         for (let i   =  0 ;  i <  len1; i++) {
//             if (arr1[i]  ! = arr2[i]) {
//                 return false
//             }
//         }
//         return true
//     }

//     function truth_table(input) { // 真值表生成函数
//         var value = new Array(50).fill(0);
//         var flag = 1;
//         var table = $("<table></table>");
//         var box, input, len_val = 0,
//             len_input = 0;
//         var operator = ["∧", "∨", "(", ")", "~", "→", "↔"];

//         function is_alpha(char) { // 判断字符是否是字母 p，q，r 等
//             return operator.includes(char) ? false : true;
//         }
//         var iter   = 0;
//         var ans = new Array(50).fill(0); // 储存每一个排列

//         function rang(num) { // 递归函数，生成 FFFF 到 TTTT 的排列
//             if (num >= len_val) { // 递归最底层，已经生成了 TF 全排列在数组 ans 中
//                 var row = $("<tr></tr>");
//                 for (var i = 0; i < len_val; i++) {
//                     row.append($("<td></td>").text((ans[i] == 1) ? "T" : "F"));
//                 }
//                 result.push(R() ? "T" : "F");
//                 iter++;
//                 row.append($("<td></td>").append(
//                     $("<input>").attr({
//                         type: "radio",
//                         class: "truth-radiobox",
//                         value: "T",
//                         name: "truth" + iter,
//                     }),
//                     $("<label></label>").attr({
//                         for: "T"
//                     }).text("T"),
//                     $("<input>").attr({
//                         type: "radio",
//                         class: "truth-radiobox",
//                         value: "F",
//                         name: "truth" + iter,
//                     }),
//                     $("<label></label>").attr({
//                         for: "F"
//                     }).text("F"),
//                 ));
//                 table.append(row);
//                 return;
//             }
//             ans[num] = 0;
//             rang(num + 1);
//             ans[num] = 1;
//             rang(num + 1); // 递归步骤
//         }

//         var cal = new Array(200).fill(0); // 逻辑栈，储存运算符号
//         var num = new Array(200).fill(0); // 字母栈，储存字母
//         var top_num, top_cal; // 两个栈的栈顶位置

//         function find_var(char) { // 计算真值的时候，找到字母ch对应的取值
//             /*
//                 例如 value[]={p,q,r} ans[]={1,0,1}
//                 输入 ch="q" 返回 "0"，输入 ch="r" 返回 "1"。
//             */
//             for (var i = 0; i < len_val; i++) {
//                 if (value[i] == char) return (ans[i] == 1) ? "1" : "0";
//             }
//         }

//         function calculate() { // 取运算栈的栈顶运算符进行运算
//             if (cal[top_cal] == "~") {
//                 num[top_num] = (num[top_num] == "1") ? "0" : "1";
//             } else if (cal[top_cal] == "∧") {
//                 var ch1 = num[top_num],
//                     ch2 = num[top_num - 1];
//                 top_num--;
//                 num[top_num] = (ch1 == "1" && ch2 == "1") ? "1" : "0";
//             } else if (cal[top_cal] == "∨") {
//                 var ch1 = num[top_num],
//                     ch2 = num[top_num - 1];
//                 top_num--;
//                 num[top_num] = (ch1 == "0" && ch2 == "0") ? "0" : "1";
//             } else if (cal[top_cal] == "→") {
//                 var ch1 = num[top_num],
//                     ch2 = num[top_num - 1];
//                 top_num--;
//                 num[top_num] = (ch1 == "0" && ch2 == "1") ? "0" : "1";
//             } else if (cal[top_cal] == "↔") {
//                 var ch1 = num[top_num],
//                     ch2 = num[top_num - 1];
//                 top_num--;
//                 num[top_num] = ((ch1 == "0" && ch2 == "0") || (ch1 == "1" && ch2 == "1")) ? "1" : "0";
//             }
//             top_cal--; // 运算栈栈顶位置-1
//         }

//         function compare(a, b) { // 比较运算符a和b的优先级，a优于b返回true
//             if (b == "(") return true;
//             if (a == "~" && b != "~") return true;
//             return false;
//         }

//         function R() { // 计算真值的函数，即求在当前排列下逻辑表达式的真假
//             top_cal = -1;
//             top_num = -1; // 栈和栈顶初始化
//             for (let i = 0; i < len_input; i++) { // 遍历{"p","&","q"}
//                 // 如果是字母，入字母栈
//                 if (value.includes(box[i])) num[++top_num] = find_var(box[i]);
//                 else { // 如果是运算符
//                     if (box[i] == ")") { // 右括号优先级最低，循环运算，直到运算栈的栈顶是左括号
//                         while (cal[top_cal] != "(") {
//                             calculate(); // 取运算符栈顶进行运算
//                         }
//                         top_cal--;
//                     } else if (box[i] == "(") { // 左括号入运算栈
//                         cal[++top_cal] = box[i];
//                     } else if (top_cal == -1 || compare(box[i], cal[top_cal])) { // 如果当前运算符比栈顶运算符优先级高，入栈
//                         cal[++top_cal] = box[i];
//                     } else {
//                         while (!(top_cal == -1 || compare(box[i], cal[top_cal]))) { // 如果不满足就取栈顶元素进行运算
//                             calculate();
//                         }
//                         cal[++top_cal] = box[i];
//                     }
//                 }
//             }
//             while (top_cal != -1) calculate();
//             if (!(top_num == 0 && top_cal == -1)) flag = 0; // flag的设置为了判断非法输入
//             if (num[0] == "1") return true; // 01栈最后的栈顶值即为计算的真值
//             return false;
//         }

//         $("#truth-table").html(undefined);
//         if (input == "") $("#truth-table").text("There is no input");

//         box = [...input]; // ["p","&","q"]
//         len_input = box.length; // 3

//         for (var i = 0; i < len_input; i++) { // 添加表头
//             if (is_alpha(box[i]) && (!value.includes(box[i]))) {
//                 value[len_val] = box[i];
//                 len_val++;
//                 table.append($("<th></th>").text(box[i]));
//             }
//         }
//         table.append($("<th></th>").text($("#hidden-container").text()));
//         rang(0); // 递归，生成排列，计算真值，添加到表中
//         if (flag == 0) $("#truth-table").text("Invalid input")
//         else {
//             $("#truth-table").append(
//                 table,
//                 $("<button></button>").attr({  id: "check-button " }).text("Check").click(functin() {
//                     var user_ans = new Array();

//                     $("input.truth-radiobox:checked").each(function) {
//                         user_ans.push($(this).val());
//                     });
//                     $("#truth-table-img").last().remove();
//                     $(this).after($("<div></div>").attr({
//                         id: "truth-table-img"
//                     }).append(
//                         $("<img>").attr({
//                             src: is_same(result, user_ans) ? "img/true.svg" : "img/false.svg",
//                             height: 27,
//                             width: 27,
//                         })));
//                     $("#truth-table-img").width($("td").eq(len_val).outerWidth());
//                 })
//             );
//         }
//     };

//     var mubu = makeSVG("svg", {
//         id: "mubu",
//         version: "1.1",
//         height: $(document).height(),
//         width: $(document).width(),
//     });
//     $("div#project").append(mubu);

//     // 加点
//     mubu = $("svg#mubu");
//     var interval = 20;
//     for (var i = 0; i <= (mubu.attr("width") / interval); i++) {
//         for (var j = 0; j <= (mubu.attr("height") / interval); j++) {
//             var circle = makeSVG("circle", {
//                 cx: interval * i,
//                 cy: interval * j,
//                 r: .75,
//                 color: "#ddd",
//             });
//             mubu.append(circle);
//         };
//     };

//     // 用户控制区布局

//     //随机数函数，返回不超过max的非负整数
//     function rand(max)  {
//         return parseInt(Math.random(1)   * max);
//     }
//     var vari   = ['p ', ' q',  'r',  's', 't'];
//     var vari_num   =  4; //变元个数
//     var operator = ["∧", "∨", "~", "→", "↔"];
//     //随机表达式
//     function equation()  {
//         var vnum   = vari_num;
//         var result   = "p";
//         for  (let  i  =   0 ; i  <  v num  - 1; i++) {
//             let temp   = operator[rand(5)];
//             if  (tem p  == ' ~') {
//                 i--;
//                 result   = te m p + result;
//             }          let tempnum = rand(2);
//                 if (tempnum )  {
//                     result  =  result + temp + tempvar;
//                 }  else { 
//                     result   = temp v ar +   temp + result;
//                 } 
//             result = '(' +   result  +  ')' ; 
//         }
//         return result;
//     }      

//     var divinput = $("div#input-section");
//     var divbutton = $("<div></div>").attr("id", "operator-button");

//     // 联结词按钮区
//     var l_operators = ["∧", "∨", "~", "→", "↔"];
// for (let item in l_operators) {
//         divbutton.append(
//             $("<button></button>").text(l_operators[item]).attr({
//                 class: "operator",
//                 id: "operator" + l_operators[item]
//             })
//         );
//     };


//     /**
//  * 
//      * 
//      * 
//      * 
//      * cbd changed
//      * 
//      * 
//      * 
//      */
//     //problem-description
//     var problem1 = $("<div></div>").attr(
//         "id", "problem-text"
//     )
//     problem1.app e nd(
//         $("<h 2></h2>").text("Problem1").attr({
//             id: "temp"
//         }),
//         $("<p></p>").text("请构造以下公式并填写正确的真值表").attr({
//             id:  "temp"
//         }),
//         $("<p></p>").text(equation()),
//         $("<br> ")
//     )

//     // 输入变元
//     divinput.append(problem1,
//         divbutton,
//         $("<input>").attr({
//             id: "input-variable",
//             type: "text",
//         })
//     );

//     var clearbutton = $("<button></button>").text("Clear").attr({
//             id: "clear-button",
//         }).click(function clear() {
//             $("line " ).remove(),
//                      $("rect").remove(),
//                     $("text").rem ove(),
//                     $("div#truth-table").remove()
//                 })
//                 //divinput.append(clearbutton);
//             var l_items = [];
//         var item = $("<button></button>").text("Generate").attr({
//             id: "generate-button",
//     }).click(function split() {
//         var input = $("#input-variable")[0].value;
//         var box = [...input]; // ["p", "&", "q"]
//         var box1 = [];
//         var len = box.length;
//         for (let i = 0; i < len; i++) {
//             if (box[i] != " ") box1.push(box[i])
//         }
//         if (len == 1) {
//             $("#hidden-container").text(box1[0]);
//         }
//         va r mu bu  =  $("svg#mubu");
//         for (var item in box1) {
//             var text = $(makeSVG("text", {
//                 x: 15,
//                 y: 40 * item + 30,
//                 fill: "transparent",
//             })).text(box1[item]);
//             mubu.append(text);
//             mubu.append($(makeSVG("rect", {
//                 x: 10,
//                 y: 40 * item + 10,
//                 width: text.get(0).getBBox().width + 10,
//                 height: 30,
//                 stroke: "#aaa",
//                 fill: "#fff",
//                 rx: 5,
//                 ry: 5,
//                 text: box1[item],
//             })));
//             var text = $(makeSVG("text", {
//                 x: 15,
//                 y: 40 * item + 30,
//                 fill: "#000",
//             })).text(box1[item]);
//             mubu.append(text);

//         }
//     });
//     divinput.append(item);

//     mubu.click(function(e) {
//         if (e.target.tagName !== "rect") {
//             $("rect").attr("stroke", "#aaa");
//             l_items = [;
//         } else {
//             if ($(e.target).attr("stroke") == "red") {
//                 $(e.target).attr("stroke", "#aaa");
//             } else {
//                 $(e.target).attr("stroke", "red");
//                 l_items.push([e.target, $(e.target).attr("text")])
//             }
//         }
//     });

//     // TODO #3 简化框图的宽高计算
//     $(".operator").click(function(e) {
//         if (l_items.length == 1 && e.target.id == "operator~") {
//             var temp = l_items.pop()
//             var raw_text = "(~" +temp[1] + ")"
//             l_items.push(raw_text)
//             var line = makeSVG("line", {
//                 x1: parseInt($(temp[0]).attr("x")) + parseInt($(temp[0]).attr("width")),
//                 x2: parseInt($(temp[0]).attr("x")) + parseInt($(temp[0]).attr("width")) + 100,
//                 y1: parseInt($(temp[0]).attr("y")) + parseInt($(temp[0]).attr("height") / 2),
//                 y2: parseInt($(temp[0]).attr("y")) + parseInt($(temp[0]).attr("height") / 2),
//                 stroke: "#000"
//             })
//             $("#hidden-container").text(raw_text);
//             var text = $(makeSVG("text", {
//                 x: 15,
//                 y: 40 * item + 30,
//                 fill: "transparent",
//             })).text(raw_text);
//             mubu.append(text);
//             mubu.append($(makeSVG("rect", {
//                 x: parseInt($(temp[0]).attr("x")) + parseInt($(temp[0]).attr("width")) + 100,
//                 y: parseInt($(temp[0]).attr("y")),
//                 width: text.get(0).getBBox().width + 10,
//                 height: 30,
//                 stroke: "#aaa",
//                 fill: "#fff",
//                 rx: 5,
//                 ry: 5,
//                 text: raw_text,
//             })));
//             var text = $(makeSVG("text", {
//                 x: parseInt($(temp[0]).attr("x")) + parseInt($(temp[0]).attr("width")) + 105,
//                 y: parseInt($(temp[0]).attr("y")) + 20,
//                 fill: "#000",
//             })).text(raw_text);
//             mubu.append(text, line, rectbox);
//         } else if (l_items.length == 2 && e.target.id != "operator~") {
//             var second = l_items.pop();
//             var first = l_items.pop();
//             var raw_text = "(" + first[1] + e.target.id.charAt(e.target.id.length - 1) + second[1] + ")";
//             l_items.push(raw_text);
//             var line1 = makeSVG("line", {
//                 x1: parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")),
//                 x2: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40),
//                 y1: parseInt($(first[0]).attr("y")) + parseInt($(first[0]).attr("height") / 2),
//                 y2: parseInt($(first[0]).attr("y")) + parseInt($(first[0]).attr("height") / 2),
//                 stroke: "#000"
//             });
//             var line2 = makeSVG("line", {
//                 x1: parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")),
//                 x2: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40),
//                 y1: parseInt($(second[0]).attr("y")) + parseInt($(second[0]).attr("height") / 2),
//                 y2: parseInt($(second[0]).attr("y")) + parseInt($(second[0]).attr("height") / 2),
//                 stroke: "#000"
//             })
//             var line_together_h = makeSVG("line", {
//                 x1: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40),
//                 x2: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40) + 60,
//                 y1: ((parseInt($(first[0]).attr("y")) + parseInt($(first[0]).attr("height") / 2)) + (parseInt($(second[0]).attr("y")) + parseInt($(second[0]).attr("height") / 2))) / 2,
//                 y2: ((parseInt($(first[0]).attr("y")) + parseInt($(first[0]).attr("height") / 2)) + (parseInt($(second[0]).attr("y")) + parseInt($(second[0]).attr("height") / 2))) / 2,
//                 stroke: "#000"
//             })
//             var line_together_v = makeSVG("line", {
//                 x1: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40),
//                 x2: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40),
//                 y1: parseInt($(first[0]).attr("y")) + parseInt($(first[0]).attr("height") / 2),
//                 y2: parseInt($(second[0]).attr("y")) + parseInt($(second[0]).attr("height") / 2),
//                 stroke: "#000"
//             });

//             var text = $(makeSVG("text", {
//                 x: 15,
//                 y: 40 * item + 30,
//                 fill: "transparent",
//             })).text(raw_text);

//             mubu.append(text);

//             var rectbox = $(makeSVG("rect", {
//                 x: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40) + 60,
//                 y: ((parseInt($(first[0]).attr("y")) + parseInt($(second[0]).attr("y")))) / 2,
//                 width: text.get(0).getBBox().width + 10,
//                 height: 30,
//                 stroke: "#aaa",
//                 fill: "#fff",
//                 rx: 5,
//                 ry: 5,
//                 text: raw_text,
//             }));

//             var text = $(makeSVG("text", {
//                 x: Math.max(
//                     parseInt($(first[0]).attr("x")) + parseInt($(first[0]).attr("width")) + 40,
//                     parseInt($(second[0]).attr("x")) + parseInt($(second[0]).attr("width")) + 40) + 65,
//                 y: ((parseInt($(first[0]).attr("y")) + parseInt($(second[0]).attr("y")))) / 2 + 20,
//                 fill: "#000",
//             })).text(raw_text);
//             mubu.append(rectbox, text, line1, line2, line_together_h, line_together_v);
//             $("#hidden-container").text(raw_text);
//         };
//     });

//     divinput.append(
//         $("<button></button>").text("Clear").attr({
//             id: "clear-button",
//             class: "wide-button",
//         }).click(function() {
//             $("line, rect, text").remove();
//             $("div#truth-table").html("").css("display", "none");
//             result = [];
//         }),
//         $("<button></button>").text("Generate truth table").attr({
//             id: "t r uth-table-button",
//             class: "wide-button",
//         }).click(function() {
//             $("div#truth-table").html("");
//             truth_table($("#hidden-container").text());
//             $("div#truth-able").fadeIn(600);
//         })
//     );

//     $("#clear-button").hover(function() {
//             $(this).append(
//                 $("<div></div>").attr({
//                     class: "bubble",
//                 }).css("display", "none").append(
//                     $("<div></div>").attr({
//                         class: "round-rect"
//                     }).text("点击清空"),
//                     $("<div></div>").attr({
//                         class: "bubble-triangle"
//                     }),
//                 ).fadeIn(200)
//             );
//         },
//         function() {
//             $(this).find("div.bubble").last().fadeOut(200);
//         });

//     $("#truth-table-button").hover(function() {
//             $(this).append(
//                 $("<div></div>").attr({
//                     class: "bubble",
//                 }).css("display", "none").append(
//                     $("<div></div>").attr({
//                         class: "round-rect"
//                     }).text("点击生成真值表"),
//                     $("<div></div>").attr({
//                         class: "bubble-triangle"
//                     }),
//                 ).fadeIn(200)
//             );
//         },
//         function() {
//             $(this).find("div.bubble").last().fadeOut(200);
//         });

// });