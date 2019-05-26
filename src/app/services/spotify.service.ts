import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private  http: HttpClient) {
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBnqDYfS2w14zHZ7052c7rDoDWcBi8cnmD_HqVlFn6s5Cf_88jsGiwcyllrOdSDVQdiTvLrLVjh5Ca5e1U'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
