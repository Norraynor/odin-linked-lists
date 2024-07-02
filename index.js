function LinkedList() {
	let list = { head: { next: null } };
	function append(value) {
		//add element to the end of list
		let node = list.head;

		while (node.next) {
			node = node.next;
		}
		node.next = value;
	}
	function prepend(value) {
		//add element to start of list
	}
	function size() {
		//return elements count
	}
	function head() {
		//return first element
	}
	function tail() {
		//return last element
	}
	function at(index) {
		//return node at given index
	}
	function pop() {
		//removes last element
	}
	function contains(value) {
		//return true if element is found otherwise false
	}
	function find(value) {
		//return index of element containing value
	}
	function toString() {
		//represent linked list objects as string
		//format: (value)->(value)->null
	}
	function insertAt(value, index) {
		//insert new element at given index
	}
	function removeAt(index) {
		//remove element at given index
	}
	return {
		list,
	};
}

function LinkedNode(value = null, nextNode = null) {
	return {
		value,
		nextNode,
	};
}
