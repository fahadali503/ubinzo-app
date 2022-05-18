/**
 * 
 * @param hour 0 - 5  => Mid Night
 * @param hour 5 - 11 => Morning
 * @param hour 12 - 5 => AfterNoon
 * @param hour 5 - 8 => Evening
 * @param hour  8 - 12 => Night
 */


export type Greet = 'Morning' | 'Mid Night' | 'Afternoon' | 'Evening' | 'Night';
export interface IGreet {
    message:string;
    type:Greet
}

export function greeting(hour:number):IGreet{
    if (hour < 5) {
        return {
            message:'Mid Night',
            type:'Mid Night'
        }
    }
    if (hour < 12) {
        return {
            message:'Good Morning',
            type:'Morning'
        }
    }

    if (hour < 17) {
        return {
            message:'Good Afternoon',
            type:'Afternoon'
        }
    }
    if (hour < 20) {
        return {
            message:'Good Evening',
            type:'Evening'
        }
    }
        return {
            type:'Night',
            message:'Good Night'
        }
}