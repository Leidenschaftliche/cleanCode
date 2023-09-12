function getNotExisting(array)
{
    const array_length = array.length;

    let secondArray = Array(array_length+1).fill(-1)/// Fill it fully with -1's

    for(i=0 ;  i < array_length  ; ++i){
        
        const ith_val=array[i];
        if (ith_val >=0 &  ith_val <=array_length){
            secondArray[ith_val]=0; //Fill as ith_val exist fill ith_val. index to 0.
        }
    }

    for(i=0 ;  i <= array_length  ; ++i)
    {
        if(secondArray[i]==-1)
        {
            return i; // The index of -1 is the only value which does not exist.
        }
    }
    return -1;
}

console.log(getNotExisting([4,0,3,2,1]))