import type FigmaEvents from "./FigmaEvents";

class EventManager {
    listeners: Partial<{
        [K in keyof FigmaEvents]: (data: FigmaEvents[K]) => void;
    }>; // FIXME: Remove this

    constructor() {
        this.listeners = {};
    }

    register<K extends keyof FigmaEvents>(
        eventName: K,
        handler: (data: FigmaEvents[K]) => void,
    ) {
        if (this.listeners[eventName])
            console.log(
                "A listener for this event already exists. Overwritting...",
            );
        this.listeners[eventName] = handler as any;
    }

    emit<K extends keyof FigmaEvents>(eventName: K, data: FigmaEvents[K]) {
        const handler = this.listeners[eventName];
        if (handler) {
            (handler as (data: FigmaEvents[K]) => void)(data);
        } else {
            console.log(
                `No listeners registered for ${eventName}. Register the event using "eventManager.register(${eventName}, ...args)".`,
            );
        }
    }
}

export const eventManager = new EventManager();
