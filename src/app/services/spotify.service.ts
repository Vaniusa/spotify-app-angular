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
      Authorization: 'Bearer BQChCVI_jSd9kL5DSu464PmpJebto2GCLlD2_PLJRddGfnNv9Q9fU_n29wXE09HoDvMTGuKBeDkoG4u1W70'
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
