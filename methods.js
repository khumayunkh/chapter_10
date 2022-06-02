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

module.exports = mapArray = obj.mapArray
module.exports = getValue = obj.getValue