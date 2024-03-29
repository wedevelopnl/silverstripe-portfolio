# silverstripe-portfolio
This module adds functionality to create and manage a portfolio (page) that includes many cases.\
You can also link customers/categories to cases and create a collection with different cases.

## Requirements
* See `composer.json` requirements

## Installation
```
composer require wedevelopnl/silverstripe-portfolio
```

## Feature Flags

### Customers
Managing and linking customers can be disabled using the following config in your project

```
---
Name: flags
After: portfolio
---
WeDevelop\Portfolio\Config:
  customer_enabled: false
```

## License
See [License](LICENSE)

## Maintainers
* [WeDevelop](https://www.wedevelop.nl/) <development@wedevelop.nl>

## Development and contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
See read our [contributing](CONTRIBUTING.md) document for more information.

### Getting started
We advise to use [Docker](https://docker.com)/[Docker compose](https://docs.docker.com/compose/) for development.\
We also included a [Makefile](https://www.gnu.org/software/make/) to simplify some commands

Our development container contains some built-in tools like `PHPCSFixer` and `yarn`.

#### Getting development container up
`make build` to build the Docker container and then run detached.\
If you want to only get the container up, you can simply type `make up`.

You can SSH into the container using `make sh`.

#### Front-end
Webpack and yarn are used to compile front-end assets.

If you use the Docker environment, you can just run `make yarn-watch` to watch for changes or run `make yarn-build` to build assets (minified and production ready!)

#### All make commands
You can run `make help` to get a list with all available `make` commands.
