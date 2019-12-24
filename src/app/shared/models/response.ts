import "reflect-metadata";
import { Response1 } from './Response1';

export class Response {
    @Reflect.metadata('decription', true)
    public teste1: string = ''; 
    public teste2: string = '';
    public teste3: string = '';
    public teste4: Response1 = new Response1();
    public teste5: any;
}
