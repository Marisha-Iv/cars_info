import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  model: string;
  speed: number;
  modelType: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.model = 'audi',
    this.speed = 235,
    this.modelType = 'rs8',
    this.colors = {
      car: 'white',
      salon: 'Black',
      wheels: 'Green'
    },
    this.options = ['abs', 'avtopilot'];
  }
  addOpt(opt) {
    this.options.unshift(opt);
    return false;
  }
  deleteOpt(opt){
    for (let i = 0; i < this.options.length; i++) {
      this.options.splice(i, 1);
      break;
    }
  }
  showEdit() {
    this.isEdit = !this.isEdit;
  }
  carSelect(carName) {
        if (carName == 'BMW') {
        this.model = 'BMW',
        this.speed = 240,
        this.modelType = '328',
        this.colors = {
            car: 'white',
            salon: 'Black',
            wheels: 'Green'
          };
        this.options = ['abs', 'coupe'];
    } else if (carName === 'Audi') {
        this.model = 'Audi',
        this.speed = 220,
        this.modelType = 'Q5',
        this.colors = {
            car: 'white',
            salon: 'Black',
            wheels: 'Green'
          };
        this.options = ['abs', 'avtopilot'];
    } else {
        this.model = 'Mersedes',
        this.speed = 220,
        this.modelType = 'brabus',
        this.colors = {
            car: 'white',
            salon: 'Black',
            wheels: 'Green'
          };
        this.options = ['abs', 'avtopilot'];
    }
  }
}
interface Colors {
  car: string;
    salon: string;
    wheels: string;
}
