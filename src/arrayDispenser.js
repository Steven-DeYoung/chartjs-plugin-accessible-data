/**
 * Dispenses the elements of an array one at a time, without modifying the array.
 * @param arr Array with elements to dispense.
 */
export function ArrayDispenser(arr) {
    this.arr = arr;
    this.index = 0;
    /**
     * Dispenses the next element, or null if exhausted.
     */
    this.dispense = function() {
        if (this.index < this.arr.length) {
          return this.arr[this.index++];
        } else {
          return null;
        }
      };
}