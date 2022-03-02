# Remix Nahmii Compiler Plugin

A plugin that allows you to easily compile NVM compatible code within Remix.

<TODO Circle CI status badge>

<TODO Read the docs badge>

<!-- [![CircleCI](https://circleci.com/gh/Machinalabs/remix-defi-explorer-plugin.svg?style=svg)](https://circleci.com/gh/Machinalabs/remix-defi-explorer-plugin) [![Documentation Status](https://readthedocs.org/projects/remix-defi-explorer-plugin/badge/?version=latest)](https://remix-defi-explorer-plugin.readthedocs.io/en/latest/?badge=latest) -->

<TODO gif image>

## Developing

First clone this repository and install dependencies with `yarn` by executing the following commands:

```
git clone git@github.com:nahmii-community/remix-nahmii-compiler-plugin.git

yarn
```

To start the project run:
```
yarn start
```

### Connect to Remix

To connect a local development instance of the plugin to remix, make sure to have it running in the background.

Once you've started the application, open the [Remix IDE](https://remix.ethereum.org/).

Navigate to the `Plugin Manager` in Remix and click on `Connect to a Local Plugin`. A new window should popup that asks you to fill in details for the local plugin.

Fill in the following details:
- Plugin Name: nahmii-compiler
- Display Name: Nahmii Compiler
- Api: compile,getCompilationResult,setCompilerConfig,compileWithParameters,compilationFinished
- Url: http://localhost:8080/

Click `OK` and the plugin should now appear in your Remix IDE. You can now use the plugin like the regular Solidity compiler within Remix.

## Building

To build a production version of this project, run:

```
yarn build
```

## Deploying

To deploy this project to surge, execute the following command:

```
yarn deploy
```

## Contributing

To contribute, clone this repository and create a new feature branch.
Once the new feature is implemented, create a new pull request with a description of the added changes.

## Issues

Feel free to open a feature request or report a bug through the issues page!
