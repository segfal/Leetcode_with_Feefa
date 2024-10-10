def find_max_average(nums, k):
    # Initialize the sum of the first k elements
    current_sum = sum(nums[:k])
    max_sum = current_sum

    # Slide the window and update the max sum
    for i in range(k, len(nums)):
        current_sum += nums[i] - nums[i - k]  # Move the window
        max_sum = max(current_sum, max_sum)  # Compare the max sum

    # Return the maximum average
    return max_sum / k