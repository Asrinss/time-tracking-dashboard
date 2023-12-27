const filterMenu = document.querySelectorAll(".menu li");
const reportTitle = document.querySelectorAll(".top span");
const currentTime = document.querySelectorAll(".card-body h1");
const previousTime = document.querySelectorAll(".card-body p");

async function fetchData() {      
    const data = await axios.get('data.json');
    filterMenu.forEach((li, index) => {
        data.data.forEach((info,i)=>{
            reportTitle[i].innerHTML = info.title;
            currentTime[i].innerHTML = `${info.timeframes.weekly.current}hrs`
            previousTime[i].innerHTML = `Last Week - ${info.timeframes.weekly.previous}hrs`
        });
        li.addEventListener('click' , (e)=>{
            switch(index){
                case 0: 
                    filterMenu.forEach(ele => {
                        ele.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    data.data.forEach((item , i)=> {
                        reportTitle[i].innerHTML = item.title;
                        currentTime[i].innerHTML = `${item.timeframes.daily.current}hrs`
                        previousTime[i].innerHTML = `Last Day - ${item.timeframes.daily.previous}hrs`
                    });
                    break;
                case 1:
                    filterMenu.forEach(ele => {
                        ele.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    data.data.forEach((item , i)=> {
                        reportTitle[i].innerHTML = item.title;
                        currentTime[i].innerHTML = `${item.timeframes.weekly.current}hrs`
                        previousTime[i].innerHTML = `Last week - ${item.timeframes.weekly.previous}hrs`
                    });
                    break;
                case 2:
                    filterMenu.forEach(ele => {
                        ele.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    data.data.forEach((item , i)=> {
                        reportTitle[i].innerHTML = item.title;
                        currentTime[i].innerHTML = `${item.timeframes.monthly.current}hrs`
                        previousTime[i].innerHTML = `Last month - ${item.timeframes.monthly.previous}hrs`
                    });
                    break;
            }
        });
    });
}
fetchData();