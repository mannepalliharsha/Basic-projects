

const components=[
       {
           "key" : "Accordian",
           "unable" : "No"
       },
       {
           "key" : "TicTacToe",
          "unable" : "No"
       },
       {
          "key" : "Autocomplete",
          "unable" : "yes"
       }
]
export default function dataservicecall(){
       return new Promise(function(resolve,reject){
             if(components){
                setTimeout(function(){
                    resolve(components);
                 })
             }
             else{
                  reject("some error occured");
             }
       })
}