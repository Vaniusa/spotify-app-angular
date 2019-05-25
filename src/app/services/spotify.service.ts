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
      Authorization: '[{"key":"Authorization","value":"Bearer BQCs6f9RXUmOIPcCUxmjPdD-sfQgUV26WaIAK85mypTl2rrIShxmY26KKktajoSq-9vezFV7WDHrF7HoKx0","description":"","type":"text","enabled":true}]'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
