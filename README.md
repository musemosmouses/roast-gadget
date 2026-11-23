# One-Line Roast: The Gadget You Use Every Day

[![make.fun · u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/musemosmouses/roast-gadget/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/musemosmouses/roast-gadget/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [make.fun](https://make.fun/r/w3zshnah) bounty
[One-Line Roast: The Gadget You Use Every Day](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
— one original line (max 200 characters) roasting a gadget used every day.
Prize pot $5 (1st $2, 2nd $2, 3rd $1), escrowed on Solana. Deadline 26 Nov 2026 15:00 WIB.

## The entry

> My phone's battery dies faster than my motivation on a Monday — and at least my motivation never begs for a charger every two hours.

132 characters. The phone is the daily gadget; the roast compares its dying
battery to Monday motivation, then lands a second punch: the phone begs for
a charger every two hours like a needy pet. Short, specific, and fresh —
the most-roasted gadget in the world, roasted from a new angle.

## How it works

`main.ts` (Node 22, stdlib only) holds the line as a fixed string, checks it
is one line of 1–200 characters, and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `out/entry.txt`). No network, no
clock, no randomness — running it twice produces byte-identical output.

## Run it

```sh
node main.ts
cat out/entry.txt
```
