// Type definitions for request-promise v0.4.2
// Project: https://www.npmjs.com/package/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Change [0]: 2015/08/20 - Aya Morisawa <https://github.com/AyaMorisawa>

import Promise = require('bluebird');
import request = require('request');
import http = require('http');

declare module rp {

    interface RequestPromiseAPI extends request.RequestAPI<RequestPromise<any>, RequestPromiseOptions, request.RequiredUriUrl> { }

    interface RequestPromise<T> extends request.Request {
        then(onFulfilled: Function, onRejected?: Function): Promise<T>;
        catch(onRejected: Function): Promise<T>;
        finally(onFinished: Function): Promise<T>;
        promise(): Promise<T>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?: (body: any, response: http.IncomingMessage) => any;
        resolveWithFullResponse?: boolean;
    }

    type RequestOptions = RequestPromiseOptions & request.UriOptions;
}

declare var rp: rp.RequestPromiseAPI;
export = rp;
