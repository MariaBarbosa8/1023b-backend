//let variavel = 10
//let numero: number = 10
///let string:string = "Isso é uma string"
//const boleano = true //false
//let vetorString: string[] = []
//const vetor:number[] = []

//Adicionar um valor no vetor
//vetor.push(10)
//vetorString.push("Terezinho")
//console.log(vetor)

//let nomeMateria:string = "Frameworks 1"
//console.log(nomeMateria)

//OBjetos em javascript

//const objEstudante = {
   // nome: "Laurizy Perdida",
   // idade:17,
   // cpf:"064.126.876-30"
//}
//objEstudante.cpf = "135.679.854-60"
//console.log(objEstudante)

//crie um vetor com dois objetos de Estudantes
//nome, cpf, idade
//mostre no console.log

//const vetorojb2Estudante = [
   // {
       // nome: "Laurizy Perdida",
       // idade:17,
       // cpf:"064.126.876-30"
   // },
   // {
   //     nome: "Laurizy Perdida",
    //    idade:17,
    //    cpf:"064.126.876-30"
  //  }
//]

//Type
//const objPessoa: {
  //  nome: string;
  //  idade: number;
//} = {
   // nome: "Geovanna",
   // idade:17
//}

//Funçoes

//function soma (a,b){
   // return a+b;
//}

 //function somaA(a,b){
   //return a+b;
// }
//const somaB = function (a,b){
   // return a+b;
//}
//const somaC = (a,b)=>{
   // return a+b;
//}
//const somD= (a,b)=>a+b;

//const v = [1,2,3,4,5]

//function f(x){
    //if(x==5){
       // return true
    //}
    //else{
     //   return false
    //}
//}
//v.find(f)

//v.find((x)=>x==5)

//crie uma funçao que receba um vetor e some 
//os numeros do vetor 
//somaNumeros([1,2,3,4])
//10
//Quando o vetor passado for vazio
//Retorna undefined

//function somanumeros(vetor) {
  //  if (vetor.length === 0) {
    //    return undefined;
   // }
   // return vetor.reduce((a,b) => a + b, 0);
//}
//console.log(somaNumeros([1, 2, 3, 4])); 
///console.log(somaNumeros([])); 

//quando o vetor passado for vazio:
///Retorna undefined

//function somaNumeros(vetor:number[]){
 //   if (vetor.length === 0){
    //    return undefined
   // } 
//let soma = 0
//for (let i = 0; i < vetor.length;i++){
   // const element = vetor[i];
   // soma = soma+element
//}
//r//eturn soma
//}
//console.log(`o valor da soma é: ${somaNumeros([1,2,3,4])}`)


//Elevado(2**2)
//Crie uma funçao que receba um vetor e um numero

//Sua funçao deve somar as posiçoes do vetor elevando 
// ao numero recebido por parametro

//Exemplo
//somaElevado([1,2,3],2) //12

//Se o vetor for vazio devolva undefined

//function somaElevado(vetor:number[],numero:number){
   // if(vetor.length===0) return undefined
   // let soma = 0
//for (let i = 0; i < vetor.length;i++){
   // const element = vetor[i]**numero;
   // soma = soma+element
//}
//return soma
//}
//console.log(somaElevado([1,2,3],3))


//Faça uma funçao que receba 2 numeros e devolva um vetor
//da sequencia dos numeros

//Ex sequencia(10,16) // [10,11,12,13,14,15,16]
//Ex sequencia (10,11) // [10,11]
//Ex sequencia (10,5) // [10,9,8,7,6,5]
//Es sequencia (10,10) // [10]

//*function sequencia(a, b) {
    //let vetor = [];
    //if (a <= b) {
       // for (let i = a; i <= b; i++) {
        //    vetor.push(i);
      //  }
  //  } else {
       // for (let i = a; i >= b; i--) {
      //      vetor.push(i);
      //  }
  //  }
  //  return vetor;
//}
//console.log(sequencia(10, 16)); 
//console.log(sequencia(10, 11)); 
//console.log(sequencia(10, 5));  
//console.log(sequencia(10, 10));



//Map
//Serve para tranformar
//vetor em outra  coisa
//const vetor:number[] = [1,2,3,4,5]
//function soma2(x:number){
 //   return x+2
//}

//const result = vetor.map(soma2)
//console.log(result)

//Atividade
//Crie uma funçao que receba um vetor
//e 
//do novo vetor é uma soma do valor antigo
//mais o numero 3.

//EX:  soma2([1,1,1,3]) // [3,3,3,5]
//EX:  soma2([2,2,2,3]) // [4,4,4,5]
//function soma2(vetor:number[]){
 //   return vetor.map((x)=>x+2)
//}

//console.log(soma2([2,2,2,3]))

//Atividade
//FAça uma funçao que receba um vetor e devolva
//esse vetor elevado ao cubo

//EX: eleva([1,2,3]) // [1,8,27]

// const vetor = [1,2,3,4,5]
// function predicado(valorBuscado){
//     if(valorBuscado==6){
//         return true
//     }   
//     else{
//         return false
//     }
// }
// console.log(vetor.filter(predicado))


