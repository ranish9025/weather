let searchvalue = document.getElementById('searchvalue')
let temp = document.getElementById('temp')
let ciname = document.getElementById('cname')
let coname = document.getElementById('coname')
let detail = document.getElementsByClassName('detail')



 
let search = async () => {
  if (searchvalue.value.length == 0) {
    alert('please enter a city name before search')
    

  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    let response = await fetch(url)
    let data = await response.json()
    temp.textContent = data.main.temp
    cname.textContent = data.name
    coname.textContent = data.sys.country
    //temp
    temp.textContent = data.main.temp;
    //max temp
    detail[0].textContent = data.main.temp_max
    //min temp
    detail[1].textContent = data.main.temp_min
    //pressure
    detail[2].textContent = data.main.pressure
    //humidity
    detail[3].textContent = data.main.humidity

    if (data.main.temp < 20) {
      document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsTwD6DN1xMkZpuvM628gZvdC0Y6fhMLcQ&usqp=CAU')"

    } else if (data.main.temp < 30 && data.main.temp < 30) {
      document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDRP_KHtU2Zaj1bvbVPR6BYOE22XRIy07oZWvNB5nniQkqQRixiCaND_3Mp03LFxmRP0&usqp=CAU')"
    } else {
      document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9XNwnHrroQA5Ga6g2b3GWYE8LfSP_-0gfw&usqp=CAU')"
    }

  }
};