class Sorter {
  constructor() {
    this.cont=0;
    this.added=[];
    this.comparator=function(a,b){
      return a-b;
    }
  }

  add(element) {
    this.cont++;
    this.added.push(element);
  }

  at(index) {
    return this.added[index];
  }

  get length() {
    return this.cont;
  }

  toArray() {
    return this.added;
  }

  sort(indices) {
    indices.sort(function(a,b){
      return a-b;
    });
   var tempArr=[];
   for(let i=0;i<indices.length;i++){
    tempArr.push(this.added[indices[i]]);

   } 
   tempArr.sort(this.comparator);
   for(let i=0;i<indices.length;i++){
    this.added[indices[i]]=tempArr.shift();

   }
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;