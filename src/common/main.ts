import { eventManager } from "./events/EventManager";
eventManager.register("createCircle", ({ count, radius, color }) => {
    console.log(count, radius, color);
});

figma.ui.onmessage = (event: any) => {
    console.log("Got event", event);
    // eventManager.emit(eventName., { count: 5 });
};

figma.showUI(__html__, { width: 600, height: 600 });
