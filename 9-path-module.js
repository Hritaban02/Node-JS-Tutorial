const path = require('path')

console.log(path.sep) // Returns a platform specific seperator

// Joins a sequence of path segements using the platform specifc seperator as the delimiter and returns a normalized resulting path
const filePath = path.join('\content', 'subfolder', 'test.txt')
console.log(filePath)

// Access Basename
const base = path.basename(filePath)
console.log(base)

// Returns a absolute path by accepting a sequence of paths or path segments and resolving it
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)