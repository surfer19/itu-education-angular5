import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Request } from '@angular/http/src/static_request';
// import { fork } from 'child_process';
// class MockError extends Response implements Error {
//     public name:any
//     public message:any
// }

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    // configure fake backend
    backend.connections.subscribe(
        (connection: MockConnection) => {
            connection.mockRespond(new Response(
                new ResponseOptions({
                    body: JSON.stringify(
                        {
                            has_more: false,
                            data: [{
                                name: 'name',
                                id: 'id'
                            }]
                        }
                    )
                })
            ));
        });

        // const testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
        // const testUser2 = { username: 'majko', password: 'poklop', firstName: 'aa', lastName: 'bb' };

        // console.log('here', );
        // const params = JSON.parse(connection.request.getBody());
        // console.log('par',  params);
        // let a = new ResponseOptions({
            // body: [{
                // contentRendered: '<p><b>Hi there</b></p>',
                // status: 200
            // }]
        // });
        // console.log(a);
        // let x = connection.mockRespond(new Response(new ResponseOptions({ status: 200 }))); //new ResponseOptions({body: 'Something'})));
        // console.log('aaa', x);
        // let err = connection.mockError(x);
        // console.log(err);
        // this.http.get('/t')
        // .subscribe(
        //   (res) => {
        //     let msg = 'Success status ("+res.status+")';
        //     console.log(msg);
        //     this.latestMessage = msg;
        //   }),
        //   (err) => {
        //     // We never get here...
        //     let msg = "Error status ("+res.status+")";
        //     console.log(msg);
        //     this.latestMessage = msg;
        //   });
        // wrap in timeout to simulate server api call
        // setTimeout(() => {
            // fake authenticate api end point
            // if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                // const params = JSON.parse(connection.request.getBody());
                // check user credentials and return fake jwt token if valid
                // create array of users
                // const arr = [];
                // arr.push(testUser, testUser2);
                // find match in arr
                // arr.forEach((element) => {
                    // console.log('param for=', params);
                    // if (element.username === params.username && element.password === params.password) {
                        // let a = new ResponseOptions({
                            // success: success ? 200 : 401,
                            // body: {
                                // token: 'fake-jwt-token'// , user_arr: arr
                            // }
                        // });
                        // let err = connection.mockError(new MockError(a));
                        // console.log('err', err);
                        // connection.mockRespond(new Response(a));
                    // }
                    // } else {
                    //     connection.mockRespond(new Response(
                    //         new ResponseOptions({ status: 200 })
                    //     ));
                    // }
                // });
                // if (params.username === testUser2.username && params.password === testUser2.password) {
                //     connection.mockRespond(new Response(
                //         new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
                //     ));
                // } else {
                //     connection.mockRespond(new Response(
                //         new ResponseOptions({ status: 200 })
                //     ));
                // }
            // }
            // fake users api end point
            // if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                // if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // connection.mockRespond(new Response(
                        // new ResponseOptions({ status: 200, body: [testUser] })
                    // ));
                // } else {
                    // return 401 not authorised if token is null or invalid
                    // connection.mockRespond(new Response(
                        // new ResponseOptions({ status: 401 })
                    // ));
                // }
            // }
            // show all users
            // if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
            // }
        // }, 500);

    return new Http(backend, options);
}
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
