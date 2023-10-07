
// let successCallback=(position)=>{
//     console.log(position);
// }
// let errorCallback=(error)=>{
//     console.log(error);
// }



// navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{
//     enableHighAccuracy:true,
//     timeout:5000
// })






window.onload=knowCity(val='cairo')
// var temp=document.querySelector('.temp') ;
var namecity=document.querySelector('.namecity')
var tableme=document.querySelector('.tableme')
var items;
var day;
var day1;
var day2;
var equalinput=document.querySelector('.equal')
var qw=''
var qq;
var hasaala=''
var f;
var s;
var t;

    function knowCity(val='cairo'){
      if(val==""){
        val='cairo'
      }
    
        let http=new XMLHttpRequest()
        http.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=f4485999a0074596ade232745233007&q=${val}&days=3`)
        http.send()

        http.addEventListener('readystatechange',function(){
            if(http.readyState==4&& http.status==200){
                console.log(JSON.parse(http.response))
                items=JSON.parse(http.response)
                day=items.current.is_day ; // 0


                let dayersName = [ "Monday" , "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

                 f = dayersName[day] ; // today
                 s = dayersName[day+1] ; // tomm
                 t = dayersName[day+2] ; // after tomm
                    // if(day==7){
                    // day= dayersName[day]
                    // }


                
               
            console.log("items"+items)
            
                displayWeather()
            } 
            else if(http.status==400){
                temp.innerHTML="<p>No matching location found.</p>"
                
            
            }
            console.log(day);
        })
    }

    function displayWeather(){
    
        hasaala=`        
                <div class="row rounded-2">
                        
                <div class="col-lg-4 one">
                    <div class=" d-flex justify-content-between">
                        <p class="ptitle" > ${f}</p>
                        <p class="ptitle">${items.forecast.forecastday[0].date}</p>
                    </div>
                    
                    <span>
                        <h4 class='namecity'>${items.location.name}</h4>
                        <div class="d-flex justify-content-around text-center">
                        <h1 class="fs-90 fw-700 lh-135 temp">${items.current.temp_c}°C</h1>
                        <img src=https://${items.current.condition.icon} class="img-fluid" alt="">
                        </div>
                        <span class="sunny">${items.forecast.forecastday[0].day.condition.text}</span>
                                <div class="d-flex justify-content-center bg-transparent w-100 ">
                                    <div class="d-flex bg-transparent">
                                        <div class="d-flex">
                                            <div class=" bg-transparent my-1">
                                                <img src="./img/icon-umberella.png" alt="">
                                                <span>20%</span>
                                            </div>
                                            <div class=" bg-transparent my-1">
                                                <img src="./img/icon-wind.png" alt="">
                                                <span>18Km/h</span>
                                            </div>
                                            <div class=" bg-transparent my-1">
                                                <img src="./img/icon-compass.png" alt="">
                                                <span>East</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div> 
                    </span>
                </div>


                <div class="col-lg-4 two text-center">
                <p class="ptitle" > ${s}</p>
                <span>
                        <img src=https://${items.forecast.forecastday[1].day.condition.icon} class="img-fluid" alt="">
                        <h4>${items.forecast.forecastday[1].day.maxtemp_c}°C</h4>
                        <p>${items.forecast.forecastday[1].day.mintemp_c}°</p>
                        <span class="sunny">${items.forecast.forecastday[1].day.condition.text}</span>

                    </span>
                </div>


                <div class="col-lg-4 three text-center">
                <p class="ptitle" > ${t}</p>
                <span>
                    <img src=https://${items.forecast.forecastday[2].day.condition.icon} class="img-fluid" alt="">
                    <h4>${items.forecast.forecastday[2].day.maxtemp_c}°C</h4>
                    <p>${items.forecast.forecastday[2].day.mintemp_c}°</p>
                    <span class="sunny">${items.forecast.forecastday[2].day.condition.text}</span>


                    </span>
                </div>


            
            </div> `
        tableme.innerHTML=hasaala
            
    }
   

    
