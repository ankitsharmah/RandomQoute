const Qou = document.querySelector('.quote');
const auth=document.querySelector('.auth');

async function geet(){
    console.log('clledd from click from index ') 
    // const url =;
    Qou.classList.remove('quote');
    Qou.innerHTML   = '';
    Qou.classList.add('loader');
    try{
        const output=await fetch(`https://api.quotable.io/random`);
       
        const data =await output.json();
    Qou.classList.remove('loader');
    Qou.classList.add('quote');


        Qou.innerHTML=`"${data?.content}"`;
        auth.innerHTML=`~${data?.author}`;
        console.log(data);
    }
    catch(e){
        alert('sorry getting error while fetching data');
    }
}
geet();