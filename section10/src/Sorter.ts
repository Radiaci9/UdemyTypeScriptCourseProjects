abstract class Sorter {
  sort() {
    const length = this.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract length: number;
}

export default Sorter;
