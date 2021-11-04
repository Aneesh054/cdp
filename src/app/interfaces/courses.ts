export interface courses{
    id?:number,
    courseName:string,
    startDate:Date,
    endDate:Date,
    required:string,
    progress:string,
    duration:{
        hours:number,
        minutes:number
    }
}