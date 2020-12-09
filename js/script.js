const text = {
  "text":[
    "Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speech}"
  ]
}

$(document).ready(function() {
$("#create").click(function() {
  const result = $(".result");
   result.html(text.text);
});
  $("#change").click(function(){
const var1 = $("input[name=var1]").val();
const var2 = $("input[name=var2]").val();
const var3 = $("input[name=var3]").val();
const var4 = $("input[name=var4]").val();
const var5 = $("input[name=var5]").val();
const var6 = $("input[name=var6]").val();
const speech = $("input[name=speech]").val();
const NEWTEXT = {
     "text": [
       `Жили-были ${var1} да ${var2},`,
       ` Была у них ${var3},`,
       ` Снесла ${var3} ${var4}, не простое - золотое,`,
       ` ${var1} бил, бил - не разбил`,
       ` ${var2} била, била - не разбила,`,
       ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось,`,
       ` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
       ` ${speech}.`,
     ]};
const result = $(".result");  
result.html(NEWTEXT.text);
    });
});