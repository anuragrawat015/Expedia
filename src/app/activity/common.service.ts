import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  search_result:any
  globalsessionid:any
  flag="false"
  clientID="2o9o3ae99ts"
  corelationID="a80e8621-510e-4686-202209050837"
  global_environment_token="T3"
  global_mock="false"
  userip="127.0.0.1"
  acceptlanguage="en-US"
  header = {

    'content-type': 'application/json',
    'cnx-userip':this.userip,
    'cnx-environment-token':this.global_environment_token,
    'cnx-mock':this.global_mock,

    'cnx-correlationId': this.corelationID,

    'cnx-tenantId': this.clientID,
    'Accept-Language':this.acceptlanguage

  }

 
  constructor() { }





  // globalactivityid:any
  // globaltransitcode:any
  // setsearchresult(result:any)
  // {
  //     this.search_result=result
  // }
  // getsearchresult()
  // {
  //   return this.search_result
  // }

  // getheaders()
  // {
  //   return this.header
  // }


  // setglobalsessionid(val:any)
  // {
  //     this.globalsessionid=val
  // }
  // getglobalsessionid()
  // {
  //     return this.globalsessionid
  // }

  // setglobalactivityid(val:any)
  // {
  //     this.globalactivityid=val
  // }
  // getglobalactivityid()
  // {
  //     return this.globalactivityid
  // }
  // setglobaltransitcode(val:any)
  // {
  //     this.globaltransitcode=val
  // }
  // getglobaltransitcode()
  // {
  //     return this.globaltransitcode
  // }

}
