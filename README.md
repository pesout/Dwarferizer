# The Dwarferizer - A Lossless Compression Algorithm

## General description
Input data are interpreted in different ways and the algorithm is searching for identical parts then. There are two compression methods - it helps to find the best combination (*method - parameters of the method - interpretation*), which makes data the smallest. After this are computed the most ideal combinations of this combinations to get the most interesting compression ratio - it means, unfortunatelly, when working with huge amount of data, it's needed to have enough computer power. On the contrary, decompression should be really fast and simple process.

## Algorithm

### Input data
Input/output format is Base64. This encoding uses 64 different chars - it means lowercase and uppercase letters of English aphabet (52), numbers (10), the slash sign and the plus sign. We may find there also `=` chars, to make this string length divisible by 4. The algorithm writes number of equal signs to statistics and they're not compressed - we can consider it to be negligible. The main reason, why I use Base64 encoding is the fact, that 64 chars perfectly fits into a table of 8 rows and 8 columns - it's an easy way, how to get double-digit Oct number.

### A formula to make compression process faster
Because of often transfers between numeral systems is good to make an estimation if it worths. This formula can tell us approximate length after the transfer.

![The formula to make compression process faster](https://raw.githubusercontent.com/pesout/Dwarferizer/master/formula.png)

- `s` - a numeral system base of input
- `r` - a numeral system base of output
- `|x|` - the length of `x`

### Table.js - from Base64 to an Oct number and back
All values from Base64 fits into a table of 8 columns and 8 rows. The table is here only for an imagination, actually it works converting input chars to it's ASCII codes - check out an example below.

|          | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|----------|---|---|---|---|---|---|---|---|
| <b>0</b> | A | B | C | D | E | F | G | H |
| <b>1</b> | I | J | K | L | M | N | O | P |
| <b>2</b> | Q | R | S | T | U | V | W | X |
| <b>3</b> | Y | Z | a | b | c | d | e | f |
| <b>4</b> | g | h | i | j | k | l | m | n |
| <b>5</b> | o | p | q | r | s | t | u | v |
| <b>6</b> | w | x | y | z | 0 | 1 | 2 | 3 |
| <b>7</b> | 4 | 5 | 6 | 7 | 8 | 9 | + | / |

Here is the example:

```javascript
var c = a.charCodeAt(pos);

if (countiny_rang(c, 65, 90)) //True means an uppercase letter
		{
             d = c - 39;
             d = transfer(d,10,8); //Converting to the Oct number
		}
```

The `countiny_rang()` function returns `true` or `false`, if is `c` between 65 and 90 (or isn't). The subtraction (`d = c - 39;`) result transfered to the Oct numeral system gives us the same value as from the table.

It means following: If is input e.g. `Hello`, appropriate output would be: `7063545405`.

**The Dwarferizer isn't ready to use. But don't worry, we are coding as fast as possible.**

## Links
 - [The Dwarferizer](http://rawgit.com/pesout/Dwarferizer/master/dwarferizer.html)
 - [GitHub repository](http://github.com/pesout/dwarferizer) 
 - [My contribution to StreTech - A technical conferrence of CTU](http://www1.fs.cvut.cz/stretech/2016/sbornik_2016/a-CD-stretech2016/vla%C5%A1im-pe%C5%A1out-Bezztratovy_kompresni_algoritmus.pdf) [CZ] [June 2016]
