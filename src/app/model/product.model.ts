export class Product {
constructor(
    public id:string,
    public productName:string,
    public productDescription:string,
    public price:number,
    public features:Array<string>,
    public productStatus:string,
    public qty:number
){}
}
