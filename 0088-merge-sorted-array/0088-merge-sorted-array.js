/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    return nums1.sort((a,b) => a - b)
};

// 배열 nums1 과 nums2 가 있다
// nums1 의 요소 개수를 나타내는 m
// nums2 의 요소 개수를 나타내는 n
// nums1 과 nums2 를 병합하는데, 감소하지 않는 순서로 정렬되게 => 오름차순으로 정렬?
// 마지막 정렬된 배열은 함수에 의해 리턴되지 않고, nums1 내부에 저장돼야함
// nums1 의 길이는 m + n 