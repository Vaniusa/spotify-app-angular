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
      Authorization: 'Bearer BQBkaHp3ujE3-IKw_0CaV-f-EwMtueA1DKvrFNMM6UlnwmLeKvVfzvsk0TjO6WWAU1Idcrvfli2c9bNA6-g'
    });

    return this.http.get(url, {headers});
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    //  .pipe(map(data => data['artists'].items));

  }
}
