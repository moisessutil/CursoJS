let num = [10,54,65,47]

console.log(num)

num.push(89)
num.push(78)
num.sort()

console.log(`O vetor tem ${num.length}`)
console.log(`A primeira posição é ${num[0]}`)


//for (let i=0;i<num.length;i++){
//    console.log(`O vetor número ${i} é ${num[i]}`)
//}

for (let i in num){
    console.log(`O vetor número ${i} é ${num[i]}`) 
}

let pos = num.indexOf(11)

if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 47 está na posição ${pos}`)
}
