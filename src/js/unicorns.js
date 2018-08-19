
let a = 12345;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var reverse = function(x) {
    let s = x + '';         // s = '12345'
    let l = s.length;       // l = 5
    let stepsCount = parseInt(l / 2);  // 2

    for (let i = 0; i < stepsCount; i++) {
        let a = s[i];
        let b = s[l - 1 - i];
        
        s = s.replaceAt(i, b);
        s = s.replaceAt(l - 1 - i, a);
    }

    return +s;
};

console.log(reverse(a));

/* &&

i result  new_result
4   ''       '5'     [0] [4] => [0] [l - 1]
3   '5'     '54'     [1] [3] => [1] [l - 1 - 1]
2   '54'    '543'    [2] [2] => [2] [l - 1 - 2]
1   '543'   '5432'
0   '5432'  '54321'

a b c
0 0 0
0 1 0
1 0 0
1 1 1

a b c
0 0 0
0 1 1
1 0 1
1 1 1


*/