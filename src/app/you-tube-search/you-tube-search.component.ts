import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result.model';
import { YouTubeSearchService } from './you-tube-search.service';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html'
})
export class YouTubeSearchComponent implements OnInit {
  searchState = {};
  constructor(private youtube: YouTubeSearchService) {}
  ngOnInit() {
    this.searchState = this.youtube.getSearchState();
  }
}
