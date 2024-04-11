Encoding process

1. Generates a seal if one isnt provided
2. splits the seal into the 3 needed parts
3. charSwaps the original QWERTY chars with normal chars
4. reduces the swapped chars using the seal into utf-8 chars
5. charswaps the utf-8 chars into other utf-8 chars
6. exports the encoded message + the generated seal for download

Decoding process

1. Splits the provided seal into the needed parts
2. reverseSwaps the utf-8 into the original utf-8 chars
3. expands the utf-8 chars into the QWERTY chars
4. reverseSwaps the chars into the original QWERTY chars
5. Exports the decoded message for download
