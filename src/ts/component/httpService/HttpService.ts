import {Component,OnInit} from '@angular/core';
import { UserService } from './../../service/UserService';


@Component({
    selector: 'http-service',
    styles:[require('./HttpService.scss')],
    template: require('./HttpService.html'),
    providers: [UserService]
})

export class HttpServiceComponent implements OnInit {

    admins:Object;
    data:Object;

    constructor(public userService:UserService) {
        this.userService = userService;
    }


    ngOnInit():void{
        this.userService.findAll().subscribe((data:any) => {
            this.admins = data.adminUsers.content;
            console.log('in component : ',this.admins);
        });
        console.log(' HttpServiceComponent ngOnInit :', 'enter');
    }

}
