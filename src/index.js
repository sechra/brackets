module.exports = function check(str, bracketsConfig) {
  // your solution
    
    var st = []
    var br = Object.fromEntries (bracketsConfig)
    var tm = str.split (``)
    
    for (var i in tm) {
        if (st[0] === tm[i]) {
            st.shift()
        }
        else if (br[tm[i]]) {
            st.unshift (br[tm[i]])
        }
        else {
            return false
        }
    }
    return st.length === 0
}
