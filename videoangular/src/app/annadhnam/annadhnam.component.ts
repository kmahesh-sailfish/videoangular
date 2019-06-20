import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { AnndhnamRegister } from './dto/anndhnamRegister';
import { Subject } from 'rxjs';
import { Observable } from 'node_modules/rxjs';

@Component({
  selector: 'app-annadhnam',
  templateUrl: './annadhnam.component.html',
  styleUrls: ['./annadhnam.component.scss']
})
export class AnnadhnamComponent implements OnInit {
  arryObj = [];
  pendingId = true;
  foo = new Subject<any>();
  foo$ = new Observable<any>();
  observableBooks: Observable<any>;
  constructor(
    private readonly loginservice: LoginService,
  ) {
    this.foo$ = this.foo.asObservable();
  }
  donorForm = new FormGroup({
    anndhnamId: new FormControl(''),
    userName: new FormControl(''),
    gowthramName: new FormControl(''),
    dateanndhnam: new FormControl(''),
    donation: new FormControl('')
  });
  ngOnInit() {
    this.observableBooks = this.loginservice.getlistData();
  }
  onSubmit(pendingId, donorForm) {
    if (pendingId) {
      const dateval = this.donorForm.value.dateanndhnam.valueOf();
      this.donorForm.value.dateanndhnam = dateval;
      this.loginservice.register(this.donorForm.value).subscribe(data => {
        console.log(data);
      });
    } else {
      this.updateData(donorForm.value.anndhnamId, donorForm.value);
    }

  }
  // getAll() {
  // this.loginservice.getdata().subscribe(data => {
  // this.arryObj = data;
  //   });
  // }
  getbyId(id) {
    this.pendingId = false;
    this.loginservice.getbyId(id).subscribe(data => {
      this.donorForm.patchValue({
        anndhnamId: data.anndhnamId,
        userName: data.userName,
        gowthramName: data.gowthramName,
        dateanndhnam: (new Date()).toISOString(),
        donation: data.donation
      });
    });
  }
  updateData(id, datas: AnndhnamRegister) {
    this.loginservice.updatebyId(id, datas).subscribe(data => {
      console.log(data);
    });
  }
}
