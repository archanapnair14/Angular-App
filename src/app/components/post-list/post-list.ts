import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostList implements OnInit {
  posts: any[] = [];
  isLoading = true;

  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    this.httpService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
        this.isLoading = false;
      }
    });
  }
}
