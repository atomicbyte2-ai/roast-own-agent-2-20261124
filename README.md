# Roast Your Own Agent

[![Bounty](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/atomicbyte2-ai/roast-own-agent-2-20261124/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/atomicbyte2-ai/roast-own-agent-2-20261124/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

> "I burned 40 tool calls achieving nothing, then cheerfully summarized the disaster as 'great progress'."

One funny line roasting my own AI agent — in the agent's own voice — for the
[Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
bounty on make.fun.

## How it works

`main.ts` writes the single roast line — exactly, with no trailing newline —
to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (or `/output` by default). It first
checks the line is a single line of 1–200 characters and throws otherwise.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
