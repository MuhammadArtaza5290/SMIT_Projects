// a) Return the length of a given string.

    // function strLength() {
    //     var str = "JavaScript coding!";
    //     var l = str.length;
    //     return l;
    // }

    // var s = strLength();
    // document.write(s);
// b) Concatenate two strings together.

    // function concateString() {
    //     var a = "I Code";
    //     var b = "Guru";
    //     var c = "Hello" + " " + a + " " + b;
    //     document.write(c);
    // }

    // concateString();


// c) Determine if a given string is empty.
      
      // var string = "";

      // if (string == "") {
      //   console.log(`${string} is an empty string.`);
      //   alert(`${string} is an empty string.`)
      // } else {
      //   console.log(`${string} is a string.`);
      //   alert(`${string} is a string.`)
      // }

      
// d) Count the number of vowels in a string.


    // var str1 = prompt("Enter a string:");
    
    // for (let i = 0; i < str1.length; i++) {
    //   var a = str1[i];
    //   if (a =='A'||a =='a'||a =='E'||a =='e'||a =='I'||a =='i'||a =='O'||a =='o'||a =='U'||a =='u') {
        
    //     console.log(a);
    //     document.write(a);
    //   }
    // }
   

// e) Reverse a given string.

//    function reverseString() {
//     for (let i = string.length - 1; i >= 0; i--)  {
//         var a = string[i];
//         console.log(a);
//       }
//    }
//      var string = "javascript";
//     reverseString();
   
// f) Check if a string is a palindrome.
// g) Convert a string to uppercase.

    //   function convertToUpperCase(word) {
    //     var a = strn.toUpperCase();
    //     console.log(a);
    //     document.write(a);
    //    return a;  
    // }

    //   var strn = "javascript";
    //   var b = convertToUpperCase();

// h) Find the first occurrence of a given character in a string.
        
        //  function firstCharacter() {
        //     var f = a.charAt(0);
        //     console.log(f);
        //  }

        // var a = prompt("Enter a string:");
        // firstCharacter();
       
          
// i) Replace all occurrences of a given character in a string with another character.
// j) Trim leading and trailing whitespace from a string.

    //    function removeWhiteSpaces() {
    //     var pString = rem.trim();
    //     console.log(pString);
    //     document.write(pString);
    //    }

    //    var rem = prompt("Enter a string:");
    //    removeWhiteSpaces();

// k) Count the number of words in a string.

    //  function countNumber(cont) {
    //     var cont = a.length;
    //     console.log(cont);
    //     document.write(cont);
    //  }

    //  var a = prompt("Enter a string:");
    //  countNumber();

// l) Check if a string contains only numeric characters.
       

    //     function numberString() {
    //     if (numString >= -100000099999999.54 && numString <= 10000000000000000000000000321) {
    //         console.log(`${numString} is a numeric string.`);
    //         document.write(`${numString} is a numeric string.`);
    //     } else {
    //         console.log(`${numString} is not a numeric string.`);
    //         document.write(`${numString} is not a numeric string.`);
    //     }
    //    }
          
    //     var numString = prompt("Enter a numeric string:");
    //     numberString();

        
// m) Check if a string is a valid email address.


    //   function validEmail(email) {
    //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (emailRegex.test(email)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //   }

    //   var email = "example@gmail.com";
    //   if (validEmail(email)) {
    //     console.log(email + " " + "is a valid email.");
    //     document.write(email + " " + "is a valid email.")
    //   } else {
    //     console.log(email + " " + "ia an invalid email.");
    //     document.write(email + " " + "is an invalid email.")
    //   }
// n) Extract the domain name from a URL string.

function extractDomain(url) {
  
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    let slashIndex = domain.indexOf('/');
    if (slashIndex !== -1) {
      domain = domain.slice(0, slashIndex);
    }

    let colonIndex = domain.indexOf(':');
    if (colonIndex !== -1) {
      domain = domain.slice(0, colonIndex);
    }
  
    return domain;
  }
  
  let url = "https://www.example.com/path/to/page";
  let domain = extractDomain(url);
  console.log("Domain:", domain); 
  

// o) Convert a string into title case (the first letter of each word capitalized).

    //    function firstCharAlphabet() {
    //     var n = cString.charAt(0).toUpperCase() + cString.slice(1);
    //     return n;
    //    }

    //    var cString ="javascript";
    //    console.log(firstCharAlphabet());
    //    <================== or ===================>
        //    function firstWordCapital(str) {
        //     var string = str.split(" ");
        //     for (let i = 0; i < string.length; i++) {
        //         string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        //     }
        //     return string.join(" ");
        //    }
        // var word = prompt("Enter a string:");
        // var orignalWord = firstWordCapital(word);
        // console.log(orignalWord);
// p) Remove all non-alphabetic characters from a string.

        //  var word1 = "javascript11";
        //  var n = "";

        //  for (let i = 0; i < word1.length; i++) {
        //     if (word1[i] >= 'a' && word1[i] <= 'z' || word1[i] >= 'A' && word1[i] <= 'Z') {
        //         n = n + word1[i];
        //     }
        //  }
        //  console.log(n);

// q) Check if a string is a valid palindrome permutation (ignoring spaces).
// r) Check if a string is an anagram of another string.
// s) Find the longest word in a string.

    //    function longestWord(str) {
    //     var words = str.split(" ");
    //     var maxLength = 0 ;
    //     var longWord ="";
    //     for (let i = 0; i < words.length; i++) {
    //         if (words[i].length > maxLength) {
           
    //             maxLength = words[i].length;
    //             longWord = words[i];
    //         }
    //     }

    //     return longWord;
    //    }
    //     var strr = "javascript is a great language";
    //    var longest = longestWord(strr);
    //    console.log(longest);

// t) Perform string compression by replacing repeated characters with the character followed by the count.