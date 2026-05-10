import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-generic-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './generic-service.html',
  styleUrl: './generic-service.scss'
})
export class GenericServiceComponent implements OnInit {
  category: string = '';
  id: string = '';
  displayName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (data['category']) this.category = data['category'];
      if (data['id']) {
        this.id = data['id'];
        this.displayName = this.id.split('-').join(' ');
      }
    });

    this.route.params.subscribe(params => {
      if (params['category']) this.category = params['category'];
      if (params['id']) {
        this.id = params['id'];
        this.displayName = this.id.split('-').join(' ');
      }
    });
  }
}
