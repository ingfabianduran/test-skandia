import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpError, Cards } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  urlCards: string = environment.URL_CARDS;

  constructor(private httpClient: HttpClient) { }

  /**
    * @author Fabian Duran
    * @createdate 2024-12-03
    * Metodo que retorna un posible error al llamado de una peticion HTTP.
    * @param error Informacion del error
    * @returns Observable con la informacion del error
  */
  handleError(error: HttpErrorResponse): Observable<never> {
    const dataError: HttpError = { status: error.status, message: error.message };
    return throwError(() => dataError);
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-12-03
    * Metodo que retorna las cartas registradas en el sistema.
    * @returns Observable con la respuesta HTTP realizada 
  */
  getCards(): Observable<Cards> {
    return this.httpClient.get<Cards>(`${this.urlCards}test-front-end-skandia/cards`).pipe(
      catchError(error => this.handleError(error))
    );
  }
}