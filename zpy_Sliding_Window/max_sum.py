# find k 

def max_sum(arr,k):
    curr_sum = arr[0:k]
    max_sum = curr_sum
    for i in range(k,len(arr)):
        curr_sum += arr[i]
        curr_sum -= arr[i-k]
        max_sum = max(curr_sum)
    return max_sum