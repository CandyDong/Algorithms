######################################swap#######################################
def swap(arr, i, j):
	(arr[i], arr[j]) = (arr[j], arr[i])

######################################swap#######################################

######################################selectionsort#######################################
# in-place comparison sort
# O(n^2)

# keep running through the list and store index of min value in minIndex
# swap arr[minIndex] and arr[i]
# increase minIndex by 1 and repeat the process among rest of the elements until the list is sorted

# performs at most n swaps (useful where swaps are expensive)

def selectionSort (arr):

	print("running selectionSort................")
	print("arr before sorted: ", *arr)

	arrLen = len(arr)

	for startIndex in  range(arrLen):
		minIndex = startIndex
		for restIndex in range(startIndex+1, arrLen):
			if (arr[restIndex] < arr[minIndex]):
				minIndex = restIndex
		swap(arr, minIndex, startIndex)

	print("arr after sorted: ", *arr)

######################################selectionsort#######################################

######################################insertionsort#######################################
# in-place comparison sort
# O(n^2)

# keep running through the list and store index of min value in minIndex
# swap arr[minIndex] and arr[i]
# increase minIndex by 1 and repeat the process among rest of the elements until the list is sorted

# faster than selection sort in practice 
# because of fewer comparisons
# but selection sort has fewer writes 

def insertionSort (arr):

	print("running insertionSort................")
	print("arr before sorted: ", *arr)

	arrLen = len(arr)

	for startIndex in range(arrLen):
		toCompIndex = startIndex + 1
		for newSortedIndex in range(1, toCompIndex, -1):
			if (arr[toCompIndex] < arr[newSortedIndex]):
				swap(arr, arr[toCompIndex], arr[newSortedIndex])

	print("arr after sorted: ", *arr)

######################################insertionsort#######################################

######################################tests#######################################
arr = [1, 5, 4, 6, 7, 0, 9, 2, 3, 8]
selectionSort(arr[:])
insertionSort(arr[:])
######################################tests#######################################