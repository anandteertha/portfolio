import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to fragment if there is one
        if (this.router.url.includes('#')) {
          const fragment = this.router.url.split('#')[1];
          if (fragment) {
            document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  scrollToFragment(fragment: string): void {
    this.router.navigate([], { fragment });
  }

}
