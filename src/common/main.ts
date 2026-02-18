import { eventManager } from "./events/EventManager";

eventManager.register("createCircle", () => {});

// // eventManager.register("createCircle", ({ count, radius, color }) => {
// //     console.log(count, radius, color);
// // });

figma.showUI(__html__, { width: 600, height: 600 });
