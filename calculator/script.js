const display = document.getElementById('display');

const btn = document.querySelectorAll('.btn');

for(let i =0; i< btn.length;i++){
    const x = btn[i].textContent;
    btn[i].setAttribute('value',x);
    if(btn[i].value =='+/-'){
        btn[i].value = '-'
    }
}

btn.forEach((b)=>{
    b.addEventListener('click',()=>{
        const x= b.getAttribute('value');
        if(x == 'AC'){
            display.innerText ='';
            return
        };
        
        if (display.innerText === '' &&
            (x === 'x'  || x === '/' || x === '*' || x === '-' || x === '+' || x === '=' || x === '%')
        ) {
            return;
        }
        if( x === 'x'){
            display.innerText = display.innerText.slice(0,-1);
            return
        }
        if( x == '='){
            try{
                const expression = display.innerText.replace(/x/g,'*');
                const result = eval(expression);
                display.innerText = result

            } catch{
                display.innerText='Error'
            }
            return
        }
        display.innerText += x;
    })
})

document.addEventListener('keydown', (e) => {
  const key = e.key; // get the key pressed

  // Check if the key is a number (0-9)
  if (!isNaN(key)) {
    display.innerText += key; // append number to display
  }
});