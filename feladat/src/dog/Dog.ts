import { DogSize } from "./DogSize";

export class Dog {
    private name : string;
    private imgsrc : string;
    
    private size : DogSize;
    private description : Array<string>;


    constructor (name : string, imgsrc : string, size : DogSize, description : Array<string>){
        this.name = name;
        this.imgsrc = imgsrc;
        this.size = size;
        this.description = description
    }
    public getName(){
        return this.name;
    }
    public getImg(){
        return this.imgsrc;
    }
    public getSize(){
        return this.size;
    }
    public getDescription(){
        return this.description;
    }


}