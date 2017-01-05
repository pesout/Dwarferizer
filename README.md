# The Dwarferizer - A Lossless Compression Algorithm

## General description
Input data are interpreted in different ways and the algorithm is searching for identical parts then. There are two compression methods - it helps to find the best combination (*method - parameters of the method - interpretation*), which makes data the smallest. After this are computed the most ideal combinations of this combinations to get the most interesting compression ratio - it means, unfortunatelly, when working with huge amount of data, it's needed to have enough computer power. On the contrary, decompression should be really fast and simple process.

## Algorithm

### Input data
Input and output format is Base64. This encoding uses 64 different chars - it means lowercase and uppercase letters of English aphabet (52), numbers (10), the slash sign and the plus sign. We may find there also `=` chars, to make this string length divisible by 4. The algorithm writes number of equal signs to statistics and they're not compressed - we can consider it to be negligible.

**The Dwarferizer hasn't ready to use yet. But don't worry, we are coding as fast as possible.**

## Links
 - [The Dwarferizer](http://rawgit.com/pesout/Dwarferizer/master/dwarferizer.html)
 - [GitHub repository](http://github.com/pesout/dwarferizer) 
 - [My contribution to StreTech - A technical conferrence of CTU](http://www1.fs.cvut.cz/stretech/2016/sbornik_2016/a-CD-stretech2016/vla%C5%A1im-pe%C5%A1out-Bezztratovy_kompresni_algoritmus.pdf) [CZ] [June 2016]
