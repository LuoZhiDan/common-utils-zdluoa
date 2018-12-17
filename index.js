import { SVGPath } from './src/libs/SVGPath';


/**
 * 深度copy一个对象给领一个对象
 * @param {*} na 
 * @param {*} b 
 */
export function copyTo(na, b) {
    for(let p in b){
        if(isObject(na[p]) && isObject(b[p])) {
            na[p] = copyTo(na[p], b[p]);
        } else {
            na[p] = b[p];
        }
    }
    return na;
}

export function isObject( o ){
    return o && (Object.prototype.toString.call( o ) === '[object Object]');
}

/**
 * 
 * @param {*} path 
 */
export function svgPath( path ){
    return SVGPath( path );
}
