import "reflect-metadata";
import { Response2 } from './Response2';

export class Response1 {
    @Reflect.metadata('decription', true)
    compostName1: string;
    compostName2: string;
    compostName3: Response2 = new Response2();
}