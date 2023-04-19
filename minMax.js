function minMax(arr) {
	let min=arr[0];
	let max=arr[0];
	let minMax=[];
	for(i=1;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i]
		}
			if(max<arr[i]){
			max=arr[i]
		}
	}
	minMax.push(min);
	minMax.push(max);
	return minMax;
}
