const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const tempStatus = document.getElementById('tempStatus');

const dataHide =document.querySelector('.middleLayer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = 'plese write any city name before search.'
       dataHide.classList.add('dataHide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9e82e4710bed6b7a5823ba2a7a95b43d`;
            const response  = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            tempStatus.innerText = arrData[0].weather[0].main;
        
            console.log(data);
            console.log(arrData[0].main.temp);
            console.log(arrData[0].weather[0].main);

            const tempMod =  arrData[0].weather[0].main;
              //condition to check sunny or cloudy
      if (tempMod == "Sunny" || tempMod == "clear") {
        tempStatus.innerHTML =
          "<i class='fas  fa-sun' style='color: #FDB813;'></i>";
      } else if (tempMod == "Clouds") {
        tempStatus.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMod == "Rain") {
        tempStatus.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        tempStatus.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }


      dataHide.classList.remove('dataHide');

        }
        catch{
            dataHide.classList.add('dataHide');
            city_name.innerText = 'plese write city name properly.'
        }
      
    }
}

submitBtn.addEventListener('click',getInfo);
