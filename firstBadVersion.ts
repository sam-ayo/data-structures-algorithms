var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1;
        let right = n;
        let mid;
        while(left <= right){
            mid = Math.floor((left + right) /2);
            if(isBadVersion(mid) && !isBadVersion(mid-1)) return mid;
            if(isBadVersion(mid)) {
                right = mid - 1
            }
            else{
                left = mid + 1
            }

        }
        return mid;
    };

};