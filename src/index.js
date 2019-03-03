

module.exports = function check(str, bracketsConfig) {
  // your solution
    let counter = 0;
    let str2 = [...str];
    let a =(buf) =>
        {
            let k = [0,0];
            for (let i=0; i<bracketsConfig.length;i++){
                if (buf === bracketsConfig[i][0]){
                   k = bracketsConfig[i]
               }
            }
            return k
        }
    let buf
        for (let j=0; j<str.length;j++) {
           buf  = str2.findIndex(val => val === a(str2[0])[1]);
            if (str2[0] === a(str2[0])[0] && buf !== -1)
            {
                counter++;
                str2.splice( buf  ,1);
                str2.splice(0,1);
            }
        }
    return (counter === str.length / 2);
}
