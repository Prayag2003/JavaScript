const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Splicing creates a DEEP COPY or it modifies the array ...
//  syntax :-  ( starting index , number of elements to be deleted , string[] to be replaced ) 

alphabets.splice(2, 2, "Prayag");
alphabets.splice(2, 2, "Hii", "Bhatt", "splicing", "prayag", "added", "extra");
console.log(alphabets);