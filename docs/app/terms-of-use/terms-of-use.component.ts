import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent implements OnInit {

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
