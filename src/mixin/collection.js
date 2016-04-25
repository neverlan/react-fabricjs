function collectionMixin(delgete) {
	delgete.add = (...args) => delgete.state.canvas &&
		delgete.state.canvas.add(...args);
	delgete.insertAt = (object, index, nonSplicing) => delgete.state.canvas &&
		delgete.state.canvas.insertAt(object, index, nonSplicing);
	delgete.remove = (...args) => delgete.state.canvas &&
		delgete.state.canvas.remove(...args);// arguments
	delgete.forEachObject = (callback, context) => delgete.state.canvas &&
		delgete.state.canvas.forEachObject(callback, context);
	delgete.getObjects = (type) => delgete.state.canvas &&
		delgete.state.canvas.getObjects(type);
	delgete.item = (index) => delgete.state.canvas &&
		delgete.state.canvas.item(index);
	delgete.isEmpty = () => delgete.state.canvas &&
		delgete.state.canvas.isEmpty();
	delgete.size = () => delgete.state.canvas &&
		delgete.state.canvas.size();
	delgete.contains = (object) => delgete.state.canvas &&
		delgete.state.canvas.contains(object);
	delgete.complexity = () => delgete.state.canvas &&
		delgete.state.canvas.complexity(object);
};

export default collectionMixin;
