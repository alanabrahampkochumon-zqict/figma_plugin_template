import { eventManager } from "./events/EventManager";
import { registerAllEvents } from "./events/EventRegistry";
import type FigmaEvents from "./events/FigmaEvents";

registerAllEvents();

figma.ui.onmessage = <K extends keyof FigmaEvents>(event: {
    type: K;
    data: FigmaEvents[K];
}) => {
    eventManager.emit(event.type, event.data);
};

figma.showUI(__html__, { width: 600, height: 600 });
