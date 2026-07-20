
Papa.parse('data/dashboard.csv',{
download:true,
header:true,
complete:function(r){
const d=r.data[0];
if(!d) return;
document.getElementById('moh').innerText=d.MOH;
document.getElementById('otif').innerText=d.OTIF+'%';
document.getElementById('accuracy').innerText=d.Accuracy+'%';
document.getElementById('ito').innerText=d.ITO;

new Chart(document.getElementById('demandChart'),{
type:'bar',
data:{
labels:['Demand','Production'],
datasets:[{data:[120,100]}]
}
});

new Chart(document.getElementById('entityChart'),{
type:'doughnut',
data:{
labels:['SEA','SDQ','SAA','MRM'],
datasets:[{data:[30,25,20,25]}]
}
});
}
});

Papa.parse('data/inventory.csv',{
download:true,
header:true,
complete:function(r){
const tbody=document.querySelector('#skuTable tbody');
r.data.forEach(x=>{
if(!x.SKU) return;
tbody.innerHTML += `<tr><td>${x.SKU}</td><td>${x.Entity}</td><td>${x.Stock}</td><td>${x.MOH}</td></tr>`;
});
}
});
