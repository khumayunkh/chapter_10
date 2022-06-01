let obj = {
    getValue: function(array, key){
        let res = []
        for(let i = 0; i<array.length; i++ ){
            res.push(array[i][key])
        }
        return res
    },
    mapArray:function(array, key) {
        let result = {};
        for (let i = 0; i < array.length; i++) {
            result[array[i][key]] = array[i];
        }
        return result;
    }
}

export const mapArray = obj.mapArray
export const getValue = obj.getValue