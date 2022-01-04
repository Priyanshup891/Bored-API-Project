const find_btn = document.querySelector('.btn');
const activity = document.querySelector('.activity');

find_btn.addEventListener('click', async () => {
    try{
        const URL = `https://www.boredapi.com/api/activity?participants=1`;
        const data = await fetch(URL);
        const responce = await data.json();
        activity.textContent = responce.activity;
    } catch(error){
        console.log("error !", error);
        activity.textContent = "Something's Wrong !";
    }
   
})
