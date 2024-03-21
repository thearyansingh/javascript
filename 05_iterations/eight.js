// reduce is used
// const myNums=[1,2,3,4,5]
// const total=myNums.reduce((acc,currval)=>{
// return acc+ currval
// },0)
// console.log(total)
const shopping=[
    {
        itemname:"mobile",
        price:10000
    },
    {
    itemname:"gun",
    price:10000,
    },
    {
itemname:"shirt",
price:1300
    }
]
const shop=shopping.reduce((acc,item)=>item.price+acc,0)
console.log(shop)