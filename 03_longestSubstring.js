/**
 * 3. Longest Substring Without Repeating Characters (Medium)
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let start = 0;
    const letters = {};

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];

        if (letter in letters) {
            start = start > letters[letter] + 1 ? start : letters[letter] + 1;
        }

        const currLen = i + 1 - start;
        if (currLen > maxLen) maxLen = currLen;

        letters[letter] = i;
    }

    return maxLen;
};

// Tests

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
