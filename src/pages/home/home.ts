import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public operation:string;
    public result: any={};

    constructor(public navCtrl: NavController, private http:Http) {

    }

    public async operate(text:string){
        let response = await this.request_newton(text).toPromise()
        this.result = response;
    }

    public request_newton(text:string):any{
        return this.http.get("https://newton.now.sh/" + this.operation + "/" + text)
            .map(function(response: Response){
                return response.json()
            })
    }
}
