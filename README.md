# Figma Plugin Template: Vite + TS

## How to run the plugin

1. Download and install <a href="" _target="blank">node.js</a> if you don't have it installed.
2. Run `npm i` to install all the packages.
3. Run `npm run dev` to start the dev server.
4. Launch <a href="" _target="blank">Figma Desktop app</a>, then Figma `Icon > Plugins > Development > Import Plugin from manifest`
5. Select the `dist/manifest.json` file. Don't select the `manifest.json` in the root directory.

## Release Build

To run the relase build use `npm run build`

## Updating plugin attributes.

You can update your plugin attributes in the `manifest.json` file in the root folder. It will get reflect in the manifest.json file in the dist folder as well.

## Event Manager

Current plugin setup adds an event manager. To use it:

1. Put your event type in `common/events/FigmaEvents.ts`
2. Register an handler in `common/events/EventRegistry.ts`
3. Now you call `eventManager.emit` in your tsx files.

Note: Only call of `eventManager.emit` in UI files, which are structured in the `src/ui` assets.
Any files that needs to be run in the main thread **must** be imported into `main.ts`

### Note

Keep all the logic that use `figma.` in the `main.ts` file or imported modules.
