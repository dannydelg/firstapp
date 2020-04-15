//https://www.youtube.com/watch?v=bK3AJfs7qNY
//https://www.youtube.com/watch?v=vNkkMf6QLiY
//https://www.youtube.com/watch?v=bH8FFMdfl5I&list=PLM-p96nOrGcb3aQ2zh8jGzRugtuKUNJdo&index=3
//https://www.youtube.com/watch?v=20AMOcsg-JQ&list=PLU3UD_RM_1AZ6ceFILghwm4MKn-Ojo87e&index=13
//hackerrank.com
//https://coderbyte.com/algorithm/linked-list-middle-element
//https://www.youtube.com/watch?v=ZeBlrtQAmN0
//https://www.youtube.com/watch?v=VRSWRvYeKTc&pbjreload=10

let clave = "Z1fH4K!@9#0";
let jack = "0123456789qwertyuiopasdfghjklzxcvbnmÑñQWERTYUIOPASDFGHJKLZXCVBNM<>,.|\/?:;\"''{}[]_-+=!)(*&^%$#@! ~°";
let comp =[];
let posible = {};
for (const it of clave) {
  posible[it] = true;
}

for (const it2 of jack) {
  if(posible[it2]){
    comp.push(it2);

  }
}

let clave2 ="";
for (let i = 0; i < comp.length; i++) {
    clave2 =clave2 + comp[i];
  
}
let nuevaClave="";
let contador =0;
let intentos =0;

for (let i = 0; i < clave.length; i++  ) {          //clave = 582 y clave2 = 258
  console.log("i: " +i);
  console.log("cont: "+contador);
  if(clave.charAt(i) == clave2.charAt(contador)){ // primera iteracion {i = 0 y contador = 0  compara 5 == 2 falso contador = 1 i=0,} 
                                                // segunda iteracion {i = 0 y contador = 1  compara 5 == 5 true contador = 2 i =1}
                                                 // tercera iteracion {i = 1 y contador = 2 compara 8 == 8 true contador =3 i = 2}
    nuevaClave = nuevaClave + clave2.charAt(contador);
    
    console.log(nuevaClave);
  
    contador=0;
  }else{
    contador++;
    i--;;
    

  }
 
  intentos++;
  console.log("intentos: "+ intentos)
}



if(clave == nuevaClave){
  console.log("clave encontrada en "+ intentos +" intentos")
}







let numeroso = [1,4,3,2];
let r = [];
let rs="";

for (let i = numeroso.length-1; i >=0; i--) {
  let element = numeroso[i];
  r.push(numeroso[i]);
  
}

r.forEach((e,i)=>{
  if(i == 0){
    rs = rs +"" +e;
  }else{
    rs = rs +" " +e;
  }
   
});



console.log(rs);
function cambiar(){
  
  let list = document.getElementById("miList");
  let itemList = ["Mate", "Algebra", "Calculo", "Algoritmos"];
  //itemList.push(list.lastElementChild.textContent);
  itemList.unshift(list.firstElementChild.textContent);
  console.log(list.lastElementChild.textContent);
  console.log(itemList);
  document.getElementById("miList").innerHTML = "";

  for (let item of itemList){
    let nuevaLista = document.createElement("li");
    nuevaLista.textContent = item;
    list.appendChild(nuevaLista);
  }
}


let hora = "12:05:45PM";
let horal = [];
let horaInt = 0;
let nuevaHora = "";
horal = hora.replace(/[{A,M,P,}]/g, "");

horal = hora.split(":");




if (hora.match("PM")) {
  hora = hora.replace("PM", "");
  horaInt = parseInt(horal[0]);

  if (horaInt == 12) {
    nuevaHora = hora;
  } else {
    horaInt = horaInt + 12;

    nuevaHora = hora.replace(horal[0], horaInt);

  }




} else if (hora.match("AM")) {
  hora = hora.replace("AM", "");
  horaInt = parseInt(horal[0]);
  if (horaInt == 12) {
    horal[0] = "00";
    nuevaHora = hora.replace("12", "00");
  } else {
    nuevaHora = hora;
  }

}

console.log(nuevaHora);













let palabra = "Hola mundo, Hola otra vez";

palabra = palabra.replace(/hola/ig, "adios");

console.log(palabra);


function LongestWord(sen) {

  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Zsd ]/g, '');

  console.log(sen);
  var arr = sen.split(' ');


  arr.sort(function (a, b) {
    return b.length - a.length
  });
  console.log(arr);
  return arr.shift();

  // code goes here  
  return sen;

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(LongestWord("uno dose@$%!#()&^~!)<> manuel "));






let sen = "Argument goes! here";
let cont = [];

let words = sen.split(" ");
words.forEach((e) => {
  if (e.match("!")) {
    e = e.substr(0, 4);

  }
  cont.push(e.length);


});
let max = 0;
let indicemayor = 0;
cont.forEach((e, i) => {

  if (e > max) {
    max = e
    indicemayor = i;
  }



});

console.log(words[indicemayor]);



// code goes here
var strArr = ["1, 3, 4, 7, 13, 15", "1, 2, 4, 13, 15, 19"];

const [firstList, secondList] = strArr.map(s => s.split(", "));

const resultMap = {};
const resulting = [];

for (const number of firstList) {
  resultMap[number] = true;

}

for (const number of secondList) {

  if (resultMap[number]) {
    resulting.push(number);
  }
}

console.log(resulting);




// keep this function call here 




let array = [7, 69, 2, 221, 8974];
let total = 0;
let total2 = 0;

array.sort((a, b) => {
  return a - b;
})

array.forEach((e, indice) => {
  if (indice != 0) {
    total = total + e;

  }
  if (indice != array.length - 1) {
    total2 = total2 + e;

  }


});


console.log(total2 + " " + total);






let n = 4;
let space = "";
let line = "";
let chart = ""

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    space = space + " ";
  }


  space = space.substr(0, ((n - 1) - i));
  line = space;
  chart = chart + "#";
  line = line + chart;

  console.log(line);
}





let arr = [3, -4, -9, 0, 4, 1];
let pos = 0;
let neg = 0;
let zero = 0;

arr.forEach((e, i) => {
  if (e > 0) {
    pos = pos + 1;
  } else if (e < 0) {
    neg = neg + 1;

  } else {
    zero = zero + 1;
  }
});

pos = pos / arr.length;
neg = neg / arr.length;
zero = zero / arr.length;
console.log(pos);
console.log(neg);
console.log(zero);







let arr1 = [

  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]


];
//let arr2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
let diag1 = 0;
let diag2 = 0;

arr1.forEach((e, indexe) => {
  e.forEach((f, indexf) => {
    //console.log(e.length);

    if (indexe == indexf) {
      diag1 = diag1 + arr1[indexe][indexf];
    }
    if (indexe + indexf == e.length - 1) {
      //console.log(arr1[indexe][indexf]);
      diag2 = diag2 + arr1[indexe][indexf];
    }

  });
});
let result = diag1 - diag2;
if (result < 0) {
  result = diag2 - diag1;
}
console.log(result);







function sum(a, b = 0) {
  return a + b;
}

let numeros = [3, 6, 7, 8, 9, 22, 56, 24];

let pares = numeros.filter((e) => {
  return e % 3 === 0
});








function numeroMagico() {
  let numsecreto = Math.random() * 100;

  numsecreto = parseInt(numsecreto);

  console.log(numsecreto);
  let mensaje = "Ingresa un numero ";
  let numAdi = prompt(mensaje, "0");





  while (numsecreto != numAdi) {


    numAdi = parseInt(numAdi);

    if (numAdi === 0) {
      break;

    } else if (numsecreto === numAdi) {
      document.getElementById("msj").innerHTML = "Ganaste!!!!!";
    } else if (numAdi > numsecreto) {
      numAdi = prompt("Debe ser ub numero mas bajo");
    } else {
      numAdi = prompt("debe se un numero mas alto");
    }



  }

  numAdi = parseInt(numAdi);

  if (numsecreto === numAdi) {
    document.getElementById("msj").innerHTML = "Ganaste!!!!!";
  }

}













let num = [2, 3, 4, 5];

let [c1, c2, c3, c4] = num.map(function (e) {

  return Math.pow(e, 2);

});





var User = function (name, age) {
  this.name = name;
  this.age = age;

}

var danny = new User("Danny", 14);
var luis = new User("Luis", 34);

User.prototype.save = function () {
  return "hello " + this.name;
};

console.log(danny.name + luis.age);

console.log(luis.save());



function FindIntersection(strArr) {

  // code goes here
  const [firstList, secondList] = strArr.map(s => s.split(", "));

  const resultMap = {};
  const result = [];

  for (const number of firstList) {
    resultMap[number] = true;
    // console.log(resultMap);
  }

  for (const number of secondList) {
    if (resultMap[number]) {
      result.push(number);
    }

  }




  return result;

}

// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));