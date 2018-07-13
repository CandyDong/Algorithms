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

# performs at most n swaps (useful where swaps are expensive

def selectionSort (arr):
	arrLen = len(arr)

	for startIndex in range(arrLen):
		minIndex = startIndex

		for i in range(minIndex+1, arrLen):
			if (arr[i] < arr[minIndex]):
				minIndex = i
		swap(arr, startIndex, minIndex)

######################################selectionsort#######################################

######################################tests#######################################
arr = [1, 5, 4, 6, 7, 0, 9, 2, 3, 8]
print("original: ", *arr)
selectionSort(arr)
print("sorted:   ", *arr)
######################################tests#######################################