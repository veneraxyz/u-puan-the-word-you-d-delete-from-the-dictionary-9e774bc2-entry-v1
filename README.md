# The Word You'd Delete from the Dictionary

![make.fun](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)
![Rank](https://make.fun/badge/veneraxyz/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2-entry-v1/rank.svg)
![Reward](https://make.fun/badge/veneraxyz/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2-entry-v1/reward.svg)

Competition: https://make.fun/competitions/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2

## The word

**synergy**

The most overused word in corporate history: it promises everything, means nothing, and has never once made a meeting shorter. Delete it and every deck, standup, and "quick sync" instantly gets 10% more honest.

## How it works

`main.ts` writes the single word to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`). A validation guard throws unless the word is non-blank, exactly one token, valid UTF-8, and free of whitespace or punctuation.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Output: `entry.txt` containing `synergy`.
