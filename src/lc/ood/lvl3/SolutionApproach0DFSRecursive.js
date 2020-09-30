/**
 * https://leetcode.com/problems/flatten-nested-list-iterator/
 * 
 * Time Complexity:     O()
 * Space Complexity:    O()
 * 
 * References:
 *  https://leetcode.com/problems/flatten-nested-list-iterator/discuss/641883/javascript-recursive-solution-(flat-first)-beats-91
 */
var NestedIterator = function (nestedList) {
    this.arr = [];
    flat(this.arr, nestedList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.arr.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.arr.shift();
};

var flat = function (arr, nestedList) {
    nestedList.forEach(item => {
        if (item.isInteger()) {
            arr.push(item.getInteger());
        } else {
            flat(arr, item.getList());
        }
    })
}