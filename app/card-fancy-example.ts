import {Component} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {


  userInfo = {name: 'Pavan', role: 'Software Engineer', about:'Develope sckills and work in reputed company.'}

  Phone = [9972720267, 9972720276];

  email = ['pavan@gmail.com', 'Sonua@gmail.com'];

  dob = "30-10-1991";

  languages = ['Kannada', 'english', 'Hindhi'];


}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */