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