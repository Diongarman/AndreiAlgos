class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  get(k){

    let address = this._hash(k)
    let currBucket = this.data[address]
    //console.log(currBucket)
    if(currBucket) {
      for(let i = 0; i < currBucket.length; i++ ){
        if(currBucket[i][0] === k) {
          return currBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys(){
     if (!this.data.length) {
      return undefined
    }
    const keysArray = []
    for(let i = 0; i < this.data.length; i++){
      
      if(this.data[i]) {

        if (this.data[i].length > 1) {

          for(let j = 0; this.data[i].length;j++){
            keysArray.push(this.data[i][j][0])
          }

        }
        

      //no collisions
      else  {
        
        keysArray.push(this.data[i][0][0])
      }

      } 
    }

    return keysArray
  }

  set(k, v) {

    let address = this._hash(k)

    //Task: Swap array for LL
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([k,v])
    return this.data
  }




}

const myHashTable = new HashTable(50);
myHashTable.set('apples', 99)
myHashTable.get('apples')
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
console.log(myHashTable.keys())

