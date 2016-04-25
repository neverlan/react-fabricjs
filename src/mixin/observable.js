function observableMixin(delgete) {
	delgete.observe = (eventName, handler) => delgete.state.canvas &&
		delgete.state.canvas.observe(eventName, handler);
	delgete.stopObserving = (eventName, handler) => delgete.state.canvas &&
		delgete.state.canvas.stopObserving(eventName, handler);
	delgete.fire = (eventName, options) => delgete.state.canvas &&
		delgete.state.canvas.fire(eventName, options);
	delgete.on = delgete.observe;
	delgete.off = delgete.stopObserving;
	delgete.trigger = delgete.fire;
}

export default observableMixin;
