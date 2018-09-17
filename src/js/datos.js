function terminar() {
  let array = []
  for(let i = 0; i < 9; i++){
    let y = document.getElementById('b'+i).textContent
    array.push(y)
  }
  let ganaste = ['1','2','3','4','5','6','7','8',' '];
  let ganaste1 = ["8", "7", "6", "5", "4", "3", "2", "1", " "];
  if(JSON.stringify(array)==JSON.stringify(ganaste) || JSON.stringify(array)==JSON.stringify(ganaste1) ) {
    swal({
      title: 'Ganaste',
      text: 'Felicidades amigo :)',
      type: 'success'
    });
  } else {
    swal({
      title: 'Aún no has ganado',
      text: 'sorry :(',
      type: 'error'
    });
  }
}