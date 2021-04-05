function binarySearch(array, target) {
	if (!array.length) return false
	let midIndex = Math.floor(array.length / 2)
	let leftArray = array.slice(0, midIndex)
	let rightArray = array.slice(midIndex + 1)

	if (target < array[midIndex]) {
		return binarySearch(leftArray, target)
	} else if (target > array[midIndex]) {
		return binarySearch(rightArray, target)
	} else {
		return true
	}
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
	if (lo === hi) return -1

	let midIndex = Math.floor((lo + hi) / 2)

	if (target < array[midIndex]) {
		return binarySearchIndex(array, target, lo, midIndex)
	} else if (target > array[midIndex]) {
		return binarySearchIndex(array, target, midIndex + 1, hi)
	} else {
		return midIndex
	}
}

module.exports = {
	binarySearch,
	binarySearchIndex,
}
