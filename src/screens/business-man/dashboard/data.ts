interface Product {
    id:string;
    title:string;
    image:string;
    price:string;
}

export const products:Product[] = [
    {id:'1',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'2',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'3',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'5',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'6',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'asd',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'123',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4324sdsa',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4asdads',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4asdasd21',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4123123',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'412312321',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'1231231234',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
    {id:'4123123sas',title:"Japanese Girl Sweet Style Patchwork Woolen Coat ",image:"https://ae01.alicdn.com/kf/He57a607792fe4f79a78bd62a911aceb9H/Autumn-Sweet-Women-Hoodies-Loose-Hooded-Sailor-collar-Cute-Lace-patchwork-female-Zip-up-hoodies-2020.jpg_220x220q90.jpg_.webp",price:'14'},
]

interface IOrder {
    title:string;
    id:number;
    status:'Pending' | 'Dispatched' | 'Recieved';
    date:string;
}

export const orders:IOrder[] = [
    {id:1,date:'03.01.2022',status:'Pending',title:'First Product'},
    {id:2,date:'03.01.2022',status:'Pending',title:'Second Product'},
    {id:3,date:'03.01.2022',status:'Recieved',title:'Third Product'},
    {id:4,date:'03.01.2022',status:'Dispatched',title:'Fourth Product'},
]