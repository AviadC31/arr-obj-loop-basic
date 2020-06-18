/*EX1*/
let arr1=["Avi","Beni","Gadi"]
let arr2=[20,25,30]
//for(let i in arr1) console.log(arr1[i],"is",arr2[i])

/*EX2*/
let sum = 0
let arr = [500,250,125]
for(let i in arr) sum += arr[i]
//console.log(sum)

/*EX3*/
//console.log(sum/(arr.length))
 
/*EX4*/
let nums = []
for(let i=1; i<101; i++) nums[i-1]=i
//console.log(nums)

/*EX5*/
//for(let i=0; i<100; i++) if(nums[i]%2!=0)console.log(nums[i])

/*EX6*/
let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
/*for(let i=0 ; i<50 ; i++){
    if(nums2[i]==709) console.log(i)
    if(nums2[100-i]==709) console.log(100-i)
}*/

/*Ex7*/
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
 for(let i=0; i<3; i++) people[i]={name:names[i],age:ages[i]}
 //console.log(people)

 /*EX8*/
 //for(let i in people) console.log(people[i].name,"is",people[i].age,"years old")

 /*EX9*/
 /*const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  for(let i=0; i<posts.length; i++) if(posts[i].id==2) posts.splice(i,1)
  console.log(posts)*/

  /*EX10*/
  const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for(let i=0; i<posts.length; i++){
    if(posts[i].id==2) 
        for(let j=0; j<posts.length; j++) 
            if((posts[i].comments)[j].id==3) posts[i].comments.splice(j,1)
    }
   // console.log(posts)

   /*EX11*/
   const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  