import { uuid } from './../util/uuid';

export class UserModel{
    id :string;
    constructor(public name:string){
        this.id = uuid();
    }
}
