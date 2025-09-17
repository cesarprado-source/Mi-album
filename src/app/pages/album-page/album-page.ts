import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCard } from "../../shared/album-card/album-card";

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule, AlbumCard],
  templateUrl: './album-page.html',
  styleUrl: './album-page.css'
})
export class AlbumPage {
  
  currentYear = new Date().getFullYear();

  cards = [
    { text: 'Card 1', time: '9 mins', imageUrl: 'https://via.placeholder.com/150' },
    { text: 'Card 2', time: '9 mins', imageUrl: 'https://via.placeholder.com/150' },
    { text: 'Card 3', time: '9 mins', imageUrl: 'https://via.placeholder.com/150' },
  ];
}