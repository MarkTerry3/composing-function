console.log('test');


function g(x){
    x = (x*x) + 4;
    return x;
}


function t(x){
    x = (x - 12);
    return x;
}

function a(p){
    p = p + 3;
    return p;
}

function m(v){
    return v;
}


console.log(g(t(a(m(3)))));