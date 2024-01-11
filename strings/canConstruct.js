/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let remainingLetters = magazine
    for(let i = 0; i < ransomNote.length; i++){
        if (!remainingLetters.includes(ransomNote[i])) return false
        remainingLetters = remainingLetters.replace(ransomNote[i], '')
    }
    return true 
};

// Test case 1 
console.log(canConstruct('aa', 'ab'))
// Test case 2
console.log(canConstruct('aa', 'aab'))