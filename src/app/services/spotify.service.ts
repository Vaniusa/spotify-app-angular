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
      Authorization: 'Bearer BQCieBg4SrgytgH9B3G0rLHBEJ3X-j7spykuj2Syu6NZD7NC27W8dXwIogqlfmEMnUUXvJh6tdWexSQIVEg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCieBg4SrgytgH9B3G0rLHBEJ3X-j7spykuj2Syu6NZD7NC27W8dXwIogqlfmEMnUUXvJh6tdWexSQIVEg'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
  }
}
