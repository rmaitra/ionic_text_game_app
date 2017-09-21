import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public items: any = ["test", "asfd"]
    public objects: any = [
        {
            name:"master.ai",
            text:"Welcome."
        }
    ]

    constructor(public navCtrl: NavController) {

    }

    public parse(text:string){
        console.log(text)
        let obj:any = {
            name:"user",
            text:text
        }
        this.objects.push(obj);
        
    }
}
