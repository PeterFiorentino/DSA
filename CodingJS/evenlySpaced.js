// Given three ints, a b c, one of them is small, one is medium and one is large. 
// Return true if the three values are evenly spaced, 
// so the difference between small and medium is the same as the difference between medium and large.

// Examples

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c){
    if(a === b && a === c) {
      return true
    }
    
    let small
    let medium
    let large
    
    if(a > b && a > c) {
      large = a
    } else if (b > a && b > c) {
      large = b
    } else if (c > a && c > b) {
      large = c
    }
    
    if(a <= b && a <= c) {
      small = a
    } else if (b <= a && b <= c) {
      small = b
    } else if (c <= a && c <= b) {
      small = c
    }
    
    if((a <= b && a >= c) || (a >= b && a <= c)) {
      medium = a
    } else if ((b <= a && b >= c) || (b >= a && b <= c)){
      medium = b
    } else if ((c <= a && c >= b) || (c >= a && c <= b)) {
      medium = c
    }
    
    if(large - medium === medium - small) {
      return true
    }
    
    return false
}