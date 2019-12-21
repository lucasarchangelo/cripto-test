import { EncriptionModel } from './encription-model';

export class Request extends EncriptionModel {
    public campo1: string;
    public campo2: string;
    public campo3: string;
    public campo4: string;
    public campo5: string;
    public campo6: string;
    public campo7: string;

    constructor(encriptionData, campo1, campo2){
        super(encriptionData, [campo1, campo2])
    }
}
