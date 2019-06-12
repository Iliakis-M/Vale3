  
# Changelog  
  
## 2019-06-12  
  
- Fixed broken code blocks. [T16:37:27.892Z]  
  
## 2019-06-05  
  
- `!why`  
- Added `typingStart` effect.  
- `!owoify text<String>`  
  
## 2019-06-03  
  
- `!image class<String>`  
- 'No results' mentioning on `!help`  
- `!fact`  
- Added bot reply logging.  
- Fixed mentions in `!chat` (2)  
  
## 2019-06-02  
  
- `!emojify sentence<String>`  
- Fixed mentions in `!chat`  
  
## 2019-06-01  
  
- 3/3 Rewrite of `avatar.ts`  
  
## 2019-05-31  
  
- 2/3 Rewrite of `avatar.ts`  
- Added URLEncoding to `!urban`, their API does not seem to parse properly.  
- `!urban word<String>`  
  
## 2019-05-30  
  
- Updated underlying panel.  
  
## 2019-05-29  
  
- Caching implemented, speeding up external API requests.  
- Command reloading leaks patched.  
- `!chat msg<String>`  
- Replaced random color generation with discord.js builtin `"RANDOM"`.  
- `!define word<String>`  
- Classes.failsafe for alternative messaging.  
  