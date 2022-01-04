const find_btn = document.querySelector('.btn');
const activity = document.querySelector('.activity');
const enter_parti = document.querySelector('.enter-parti');

find_btn.addEventListener('click', async () => {
    try{
        const participate = enter_parti.value;
        const URL = `https://www.boredapi.com/api/activity?participants=${participate}`
        const data = await fetch(URL);
        const responce = await data.json();
        activity.textContent = responce.activity;

        if (participate == ""){
            activity.textContent = "Please, enter the participants";
        }
    } catch(error){
        console.log("error !", error);
        activity.textContent = "Something's Wrong !";
    }
   
})