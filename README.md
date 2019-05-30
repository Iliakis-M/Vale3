# Vale3
Third rewrite of the modular bot framework for *Discord* '**Vale**'
This version adds portability and allows the creation of more complex botnets while using the brand new [adm-panel2](https://github.com/Valen-H/Admin-Panel-II) module.

## Commands  

### Utility

* `8ball[ query<String>]` - Ask the magic ball a question.
* `avatar[ resolvable<String>]` - Fetch an avatar.
* `cat|neko` - Fetch a random cat emoji ([nekos.life]).
* `chat[ message<String>]` - Speak with the bot ([nekos.life]).
* `color[ resolvable<String>]` - Get a random or custom color.
* `define word<String>` - Fetch the definition of a word.
* `help resolvable<String>` - Get help info about command(s).
* `pings` - Fetch Discord heartbeat(s).
* `yomomma` - Fetch a cringy joke -_- .

### Admin

* `help resolvable<String>` - Get help info about command(s), including admin-only ones.

### Owner

*  `eval code<String>` - Evaluate a JavaScript expression.
* `help resolvable<String>` - Get help info about command(s), including owner-only ones.

## Other features

* You can setup a webhook to track bot status (online/offline).
* You can load a custom data config besides the common config.

## External APIs
* [https://nekos.life/api/v2/endpoints][nekos.life]
* WordNet
* [Yomomma](https://yomomma.info/)

[nekos.life]: https://nekos.life/api/v2/endpoints
