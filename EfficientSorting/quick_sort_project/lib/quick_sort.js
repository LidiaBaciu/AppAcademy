// nothing fancy
function partition(array, pivot) {
	let left = []
	let right = []

	array.forEach((el) => {
		if (el < pivot) {
			left.push(el)
		} else {
			right.push(el)
		}
	})

	return [left, right]
}

// if you fancy
function partition(array, pivot) {
	let left = array.filter((el) => el < pivot)
	let right = array.filter((el) => el >= pivot)
	return [left, right]
}

function quickSort(array) {
	if (array.length <= 1) {
		return array
	}

	let pivot = array.shift()
	let left = array.filter((el) => el < pivot)
	let right = array.filter((el) => el >= pivot)

	let leftSorted = quickSort(left)
	let rightSorted = quickSort(right)

	return [...leftSorted, pivot, ...rightSorted]
}

module.exports = {
	quickSort,
}
