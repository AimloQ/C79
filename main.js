std_array=[];
function submit() {
    var n1=document.getElementById("std1").value;
    var n2=document.getElementById("std2").value;
    var n3=document.getElementById("std3").value;
    var n4=document.getElementById("std4").value;

    std_array.push(n1);
    std_array.push(n2);
    std_array.push(n3);
    std_array.push(n4);
    console.log(std_array);
    document.getElementById("display_name").innerHTML=std_array;
}

function sorting() {
    std_array.sort();
    console.log(std_array);
    document.getElementById("display_name").innerHTML=std_array;
}