import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Covidapi() {
  
    const URL = "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";
    const [dizi, setDizi] = useState("")

//   const [veri, setVeri] = useState({})

//   useEffect(() => {
    
//     axios.get(URL).then((u)=>setVeri(u.data["20/05/2021"])).catch((err)=> console.log(err))
  
    
//   }, []);
  
//   console.log("veriler:",veri)


  const clickHandler=(e)=>{
 
    e.preventDefault();
   var x = document.getElementById("numb").value;
    axios.get(URL).then((u)=>setDizi(u.data[x])).catch((r)=>console.log(r));
    
  }
  
console.log("TARİHLİ ADRES",dizi);


    return (
    <div>


<div className="container">
<form>
  <div class="mt-5">
    <label class="form-label" >Tarih Giriniz</label>
    <input type="text" class="form-control" id='numb'  placeholder="GG/AA/YYYY"/>
    
  </div>
  <button className="btn btn-warning mt-2 " type="submit" onClick={(clickHandler)} >Verilere Ulaş</button>
</form>
 
</div>

 <br/>
 <hr />

 <table className='table table-bordered table-striped table-hover table-info'>
   <thead>
    <tr>
        <th>Hastalar</th>
        <th>Toplam Hasta</th>
        <th>Ölümler</th>       
        <th>totalDeaths</th>
        <th>kurtarıldı</th>
        <th>toplam Kurtarılan</th>
        <th>totalEntübasyon</th>       
        <th>totalIntensiveCare</th>
        <th>testler</th>
        <th>toplamTestler</th>
        <th>tarih</th>       
        <th>kritik</th>
        <th>pneumoniaPercent</th>
    </tr>
   </thead>
   <tbody>

<tr>   
  <td>{dizi.patients == " "? "--": dizi.patients}</td>
  <td>{dizi.totalPatients == ""? "--": dizi.totalPatients}</td>
  <td>{dizi.deaths == ""? "--": dizi.deaths}</td>
  <td>{dizi.totalDeaths == ""? "--": dizi.totalDeaths}</td>
  <td>{dizi.recovered == ""? "--": dizi.recovered}</td>
  <td>{dizi.totalRecovered == ""? "--": dizi.totalRecovered}</td>
  <td>{dizi.totalIntubated == ""? "--": dizi.totalIntubated}</td>
  <td>{dizi.totalIntensiveCare == ""? "--": dizi.totalIntensiveCare}</td>
  <td>{dizi.tests == ""? "--": dizi.tests}</td>
  <td>{dizi.totalTests == ""? "--": dizi.totalTests}</td>
  <td>{dizi.date == ""? "--": dizi.date}</td>
  <td>{dizi.critical == ""? "--": dizi.critical}</td>
  <td>{dizi.pneumoniaPercent == ""? "--": dizi.pneumoniaPercent}</td>

</tr> 

   </tbody>
    </table>
    </div>
  )
}

export default Covidapi