
var myArgs = process.argv.slice(2);

var numbersInText = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var result = [];// Creating array to hold the numbers in text;
var count = 0;
function main(myArgs){
    var valid = true; // Used to check whether the input is valid or not;
    myArgs.forEach(element => {

        str = "";
        seperateNumbers = element.split("");
        
        seperateNumbers.forEach(element =>{
            var curnum = numbersInText[parseInt(element)];
            if(curnum ==="undefined"){
                valid = false;
            }
            str += curnum;
            
        });
        result[count]= str;
        count++;    
    });
    if(valid){
        console.log(result.join(','));
    }else{
        console.log("invalid input");
    }  
}
main(myArgs)
    



    

    

