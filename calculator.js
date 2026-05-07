let string="";
let buttons=document.querySelectorAll('.button');
let input=document.querySelector('input');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if(string==""){
                string="";
                return;
            }
            try{
                let result=eval(string.replaceAll('x','*').replaceAll('^','**'));
                if(!isFinite(result)||isNaN(result)){
                    input.value="Invalid";
                    string="";
                }
                else{
                    string=String(result);
                    input.value=string;
                }
            }
            catch(error){
                input.value="Error";
                string="";
            }
            
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;

        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            input.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    });
});