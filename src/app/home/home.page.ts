import { Component, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  form: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.creatreForm();
    }

    creatreForm() {
      this.form = this.formBuilder.group({
        nome: ['', Validators.required],
        datanascimento: ['', Validators.required],
        inscricao: ['', Validators.required],
        zona: ['', Validators.required],
        secao: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        dataemissao: ['', Validators.required],
        nomepai: ['', Validators.required],
        nomemae: ['', Validators.required]
      });
  }

  salvar() {
    console.log(this.form.value);
    this.creatreForm();
  }
}
