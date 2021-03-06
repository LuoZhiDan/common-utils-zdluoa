import { SVGPath } from './libs/SVGPath';

/**
 * 深度copy一个对象给领一个对象
 * @param {*} na 
 * @param {*} b 
 */
function copy( na, b ){
    for(let p in b){
        if(isObject(na[p]) && isObject(b[p])) {
            na[p] = copy(na[p], b[p]);
        } else {
            na[p] = b[p];
        }
    }
    return na;
}

/**
 * 多个对象copy一个
 * @param  {...any} args 
 */
export function copies(...args) {
    let item = args.pop();
    let it;
    while((it = args.pop())){
        item = copy(it, item);
    }
    return item;
}

export function isObject( o ){
    return o && (Object.prototype.toString.call( o ) === '[object Object]');
}

/**
 * @param {*} path 
 */
export function svgPath( path ){
    return SVGPath( path );
}
