import {Component} from '@angular/core';

@Component ({
  selector: 'app-navigator',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent {
  home = 'Home';
  news = 'News';
  dropdown = 'DropDown';
  link1 = 'Link 1';
  link2 = 'Link 2';
  link3 = 'Link 3';
  message = 'Simple Navigation Bar in Angular2'
}
