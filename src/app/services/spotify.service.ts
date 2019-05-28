import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private  http: HttpClient) {
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDMDkOrOHXNzgvuI9RRB_yUn92-p-iMzySdGihQVbm3QSawmr5WImW21faR0UJXxuUp79RVy8VXLomBy0E'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));

  }
}
