   /*3-WAY MEARGE SORT*/
   function merge(gArray, low, mid1,mid2, high, destArray)
    {
        let i = low, j = mid1, k = mid2, l = low;  
        while ((i < mid1) && (j < mid2) && (k < high))
        {
            if(gArray[i] < gArray[j])
            {
                if(gArray[i] < gArray[k])
                {
                    destArray[l++] = gArray[i++];
                }
                else
                {
                    destArray[l++] = gArray[k++];
                }
            }
            else
            {
                if(gArray[j] < gArray[k])
                {
                    destArray[l++] = gArray[j++];
                }
                else
                {
                    destArray[l++] = gArray[k++];
                }
            }
        }
        while ((i < mid1) && (j < mid2)) 
        {
            if(gArray[i] < gArray[j])
            {
                destArray[l++] = gArray[i++];
            }
            else
            {
                destArray[l++] = gArray[j++];
            }
        }
        while ((j < mid2) && (k < high))
        {
            if(gArray[j] < gArray[k])
            {
                destArray[l++] = gArray[j++];
            }
            else
            {
                destArray[l++] = gArray[k++];
            }
        }
        while ((i < mid1) && (k < high))
        {
            if(gArray[i] < gArray[k])
            {
                destArray[l++] = gArray[i++];
            }
            else
            {
                destArray[l++] = gArray[k++];
            }
        }
        while (i < mid1)
            destArray[l++] = gArray[i++];
        while (j < mid2)
            destArray[l++] = gArray[j++];
        while (k < high)
            destArray[l++] = gArray[k++];
    }
    function mergeSort3WayRec(gArray, low,high, destArray)
    {
        if (high - low < 2)
            return;
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = low + 2 * Math.floor((high - low) / 3) + 1;
        mergeSort3WayRec(destArray, low, mid1, gArray);
        mergeSort3WayRec(destArray, mid1, mid2, gArray);
        mergeSort3WayRec(destArray, mid2, high, gArray);
        merge(destArray, low, mid1, mid2, high, gArray);
    }
    function mergeSort3Way(gArray,n)
    {
        // if array size is zero return null
        if (n == 0)
            return;
    
        // creating duplicate of given array
        let fArray = new Array(n);
    
        // copying elements of given array into
        // duplicate array
        for (let i = 0; i < n; i++)
            fArray[i] = gArray[i];
        // sort function
        mergeSort3WayRec(fArray, 0, n, gArray);
        // copy back elements of duplicate array
        // to given array
        for (let i = 0; i < n; i++)
            gArray[i] = fArray[i];
    }
    let data = []

    function add(){
        if(document.getElementById('a').value == ''  ){
            alert("Input is EMPTY! Please enter a NUMBER")
            document.getElementById('a').value = ''
        }
        else if(document.getElementById('a').value % 1 != 0){
            alert("Input is not a NUMBER! Please enter a NUMBER")
            document.getElementById('a').value = ''
        }
        else{
            data.push(Number(document.getElementById("a").value))
        document.getElementById('demo1').innerHTML= "Values in array : "+'['+[data]+']'
        
        
        document.getElementById('a').value =''
        }
        
    }
    
    function doit(){
        if(data.length==0){
            alert("Array is Empty! Please Enter Array")
        }
        else{
        let n = data.length
        mergeSort3Way(data,n);
        document.getElementById('demo2').innerHTML ="Sorted values : "+'['+data+']'
        console.log(n)
        }
    }
    
   

    
    