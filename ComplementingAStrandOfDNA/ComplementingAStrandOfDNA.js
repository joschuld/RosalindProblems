// Problem
// In DNA strings, symbols 'A' and 'T' are complements of each other, as are 'C' and 'G'.

// The reverse complement of a DNA string s
//  is the string sc
//  formed by reversing the symbols of s
// , then taking the complement of each symbol (e.g., the reverse complement of "GTCA" is "TGAC").

// Given: A DNA string s
//  of length at most 1000 bp.

// Return: The reverse complement sc
//  of s
// .

// Sample Dataset
// AAAACCCGGT
// Sample Output
// ACCGGGTTTT

let dna = "AAAACCCGGT";
let reverseComplement = "";
for (let i = dna.length - 1; i >= 0; i--) {
    if (dna[i] === "A") {
        reverseComplement += "T";
    } else if (dna[i] === "T") {
        reverseComplement += "A";
    } else if (dna[i] === "C") {
        reverseComplement += "G";
    } else if (dna[i] === "G") {
        reverseComplement += "C";
    }
}

console.log(reverseComplement);