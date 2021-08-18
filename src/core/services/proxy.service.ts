export class ProxyService<T> {
    private localstorageService: LocalstorageDataService<T>;
    private remoteDataService: RemoteDataService<T>;
 
    constructor(private httpClient: HttpClient, private instance: T) {
      this.localstorageService = new LocalstorageDataService(this.instance, this.httpClient);
      this.remoteDataService = new RemoteDataService(this.instance, this.httpClient)
    }
 
    getOne(id: number): Observable<T> {
      if (this.instance.use_localstorage) {
        return of(this.localstorageService.findById(id));
      } else {
        return this.remoteDataService.getOne(id).pipe(map((result: T) => result));
     }
   }
 }