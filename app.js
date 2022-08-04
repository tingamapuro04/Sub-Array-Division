// The link to the challenge is here below
// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const all = []
function birthday(s, d, m) {
    // Write your code here
    for (let x = 0; x< s.length; x++) {
        let sub = s.slice(x, x+m)
        all.push(sub)
    }
    const filtered = all.filter((item) => item.reduce((accum, currentValue) => {
        return accum + currentValue
    }, 0) === d)
    
    return filtered.length
}
