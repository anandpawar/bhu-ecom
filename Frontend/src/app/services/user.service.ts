import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public uuid: string = '';

  chatAndUserId$: BehaviorSubject<any> = new BehaviorSubject(null);

  getChatAndUserId(): Observable<any> {
    return this.chatAndUserId$.asObservable();
  }

  setChatAndUserId(data) {
    this.chatAndUserId$.next(data);
  }

  constructor( private http: HttpClient) { }

  getApplicants = (pageNo, type) => {
    return this.http.get<any>(`${environment.apiURL}admin/application?page=${pageNo}&pageSize=10&type=${type}&factor=created&order=desc`)
        .pipe(map(data => {
            return data;
        }));
  }

  getUsers = (pageNo) => {
    return this.http.get<any>(`${environment.apiURL}api/admin/users?page=${pageNo}`)
        .pipe(map(data => {
            return data;
        }));
  }

  updateUser = (user) => {
    return this.http.patch<any>(`${environment.apiURL}api/admin/user`,user)
        .pipe(map(data => {
            return data;
        }));
  }

  deleteUser = (id) => {
    return this.http.delete<any>(`${environment.apiURL}api/admin/user/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  getProducts = (pageNo) => {
    return this.http.get<any>(`${environment.apiURL}api/products?page=${pageNo}`)
        .pipe(map(data => {
            return data;
        }));
  }

  getProduct = (id) => {
    return this.http.get<any>(`${environment.apiURL}api/product/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  createProduct = (product) => {
    return this.http.post<any>(`${environment.apiURL}api/product`,product)
        .pipe(map(data => {
            return data;
        }));
  }

  updateProduct = (product) => {
    return this.http.patch<any>(`${environment.apiURL}api/product`,product)
        .pipe(map(data => {
            return data;
        }));
  }

  deleteProduct = (id) => {
    return this.http.delete<any>(`${environment.apiURL}api/admin/product/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  getUserDetail = (id) => {
    return this.http.get<any>(`${environment.apiURL}admin/application/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  getUserProfile = (id) => {
    return this.http.get<any>(`${environment.apiURL}user/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  getContacts = (pageNo) => {
    return this.http.get<any>(`${environment.apiURL}admin/contactus?page=${pageNo}&pageSize=10`)
        .pipe(map(data => {
            return data;
        }));
  }

  sendInvitation = (user) => {
    return this.http.post<any>(`${environment.apiURL}admin/user/generate`, { email: user.applicantEmail, name: user.applicantFirstName + ' ' + user.applicantLastName })
      .pipe(map(data => {
            return data;
        }));
  }

  sendCustomMail = (user) => {
    return this.http.post<any>(`${environment.apiURL}admin/send-email`, user)
        .pipe(map(data => {
            return data;
        }));
  }

  getChatId = (id) => {
    return this.http.post<any>(`${environment.apiURL}chat?user=${id}`,'')
        .pipe(map(data => {
            return data;
        }));
  }
  
  getOldChatMessages= (id) => {
    return this.http.get<any>(`${environment.apiURL}chat/${id}/message?page=1&pageSize=500`)
        .pipe(map(data => {
            return data;
        }));
  }

  getChatList = () => {
    return this.http.get<any>(`${environment.apiURL}chat?page=1&pageSize=5`)
        .pipe(map(data => {
            return data;
        }));
  }

  removeApplicationForm = (id) => {
    return this.http.delete<any>(`${environment.apiURL}admin/application/${id}`)
        .pipe(map(data => {
            return data;
        }));
  }

  removeMessage = (chatid, msgid) => {
    return this.http.delete<any>(`${environment.apiURL}chat/${chatid}/message/${msgid}`)
        .pipe(map(data => {
            return data;
        }));
  }

  searchUsers = (pageNo, search) => {
    return this.http.get<any>(`${environment.apiURL}admin/user?page=${pageNo}&pageSize=10&query=${search}&factor=created&order=desc`)
        .pipe(map(data => {
            return data;
        }));
  }

  searchApplicants = (pageNo, type, search) => {
    return this.http.get<any>(`${environment.apiURL}admin/application?page=${pageNo}&pageSize=10&type=${type}&query=${search}&order=desc`)
        .pipe(map(data => {
            return data;
        }));
  }
  
  getDocuments = (id) => {
    return this.http.get<any>(`${environment.apiURL}user/${id}/documents`)
        .pipe(map(data => {
            return data;
        }));
  }

  removeDocument = (uid, docid) => {
    return this.http.delete<any>(`${environment.apiURL}user/${uid}/documents/${docid}`)
        .pipe(map(data => {
            return data;
        }));
  }

}
