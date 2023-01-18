function generatePermutations(string) {
   
    let result = [];
 
    function permute(str, current) {
      
        if (current.length === string.length) {
           
            result.push(current);
        } else {
           
            for (let i = 0; i < str.length; i++) {
              
                permute(str, current + str[i]);
            }
        }
    }
  
    permute(string, "");

    result.sort();

    return result;
}


let input1 = "abc";
console.log(generatePermutations(input1));

// Output 1 : 
// [
//     'aaa', 'aab', 'aac', 'aba',
//     'abb', 'abc', 'aca', 'acb',
//     'acc', 'baa', 'bab', 'bac',
//     'bba', 'bbb', 'bbc', 'bca',
//     'bcb', 'bcc', 'caa', 'cab',
//     'cac', 'cba', 'cbb', 'cbc',
//     'cca', 'ccb', 'ccc'        
//   ]

let input2 = "qpr";
console.log(generatePermutations(input2));


//   Output 2 : 
//   [
//     'ppp', 'ppq', 'ppr', 'pqp',
//     'pqq', 'pqr', 'prp', 'prq',
//     'prr', 'qpp', 'qpq', 'qpr',
//     'qqp', 'qqq', 'qqr', 'qrp',
//     'qrq', 'qrr', 'rpp', 'rpq',
//     'rpr', 'rqp', 'rqq', 'rqr',
//     'rrp', 'rrq', 'rrr'
//   ]

let input3 = "321";
console.log(generatePermutations(input3));

// Output 3 : 
// [
//     '111', '112', '113', '121',
//     '122', '123', '131', '132',
//     '133', '211', '212', '213',
//     '221', '222', '223', '231',
//     '232', '233', '311', '312',
//     '313', '321', '322', '323',
//     '331', '332', '333'
//   ]