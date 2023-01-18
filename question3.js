function constructSets(start, end) {
    // Initialize the sets

    let o1 = new Set();
    let o2 = new Set();
    let o3 = new Set();
    let o4 = new Set();
  
    // Add elements to set o1
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            o1.add(i);
        }
    }
  
    // Add elements to set o2
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            o2.add(i);
        }
    }
  
    // Add elements to set o3
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            o3.add(i);
        }
    }
  
    // Add elements to set o4
    for (let i = start; i <= end; i++) {
        if (i % 5 === 0 && i % 3 !== 0) {
            o4.add(i);
        }
    }
  
    // Return the sets
    return {o1, o2, o3, o4};
}

let sets1 = constructSets(1, 10);

console.log(sets1.o1); // Set(5) { 3, 5, 6, 9, 10 }
console.log(sets1.o2); // Set(0) {}
console.log(sets1.o3); // Set(3) { 3, 6, 9 }
console.log(sets1.o4); // Set(2) { 5, 10 }

let sets2 = constructSets(3, 25);

console.log(sets2.o1); // Set(12) { 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25 }
console.log(sets2.o2); // Set(1) { 15 }
console.log(sets2.o3); // Set(7) { 3, 6, 9, 12, 18, 21, 24 }
console.log(sets2.o4); // Set(4) { 5, 10, 20, 25 }






