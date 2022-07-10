console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
var Input = [1, 2, 3, 4, 5, 1, 3];
a=Input.indexOf(4);
console.log(a);


// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
var Input = [1, 2, 3, 4, 5, 1, 3];
a=Input.indexOf(1);
console.log(a);


// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
var Input = [1, 2, 3, 4, 5, 1, 3];
a=Input.indexOf(7);
console.log(a);

("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5


let n = 5; 
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);


("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]


var Input = [3, 2, 1, 4, 5, 45];
Input.sort(function (a, b) {
  return a - b
});
console.log(Input);


//("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

function Compare(str1, str2){
     if (str1.length !== str2.length) {
        return false
     }
  
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}

console.log(Compare("LISTEN", "SILENT"));
console.log(Compare("HELLO", "JELLO"));


("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("Hello"));

("Q5 END =====================")