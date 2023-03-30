
        function somar(){
            var tn1 = window.document.getElementById('txt1')
            var tn2 = window.document.querySelector('input#txt2')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 + n2
            var value = document.getElementById('value').value = `${s}`
            
        }
        function somar1(){
            var tn1 = window.document.getElementById('txt3')
            var tn2 = window.document.querySelector('input#txt4')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 - n2
            var value = document.getElementById('value2').value = `${s}`
        }
        function somar2(){
            var tn1 = window.document.getElementById('txt5')
            var tn2 = window.document.querySelector('input#txt6')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 * n2
            var value = document.getElementById('value3').value = `${s}`
        }
        function somar3(){
            var tn1 = window.document.getElementById('txt7')
            var tn2 = window.document.querySelector('input#txt8')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 / n2
            var value = document.getElementById('value4').value = `${s}`
        }
        function somar4(){
            var tn1 = window.document.getElementById('txt9')
            var tn2 = window.document.querySelector('input#txt10')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 % n2
            var value = document.getElementById('value5').value = `${s}`
        }
        function somar5(){
            var tn1 = window.document.getElementById('txt11')
            var tn2 = window.document.querySelector('input#txt12')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 ** n2
            var value = document.getElementById('value6').value = `${s}`
        }


        function gerar() {
            let num = document.getElementById('txtn')
            let tab = document.getElementById('tab')
            if (num.value.length == 0){
                window.alert('Por Favor, digite um número! ')
            } else {
                let n = Number(num.value)
                let c = 1
                tab.innerHTML = ''
                while (c <= 10) {
                   let item = document.createElement('option')
                   item.text = `${n} x ${c} = ${n*c}`
                   item.value = `tab${c}`
                   tab.appendChild(item)
                   c++
                }
            }
            
        }

        function refresh(){
            var msg = document.getElementById('hr')
            var today = new Date ()
            var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
            msg.innerHTML = `\u{1F556}${time}`
            setTimeout("refresh();" ,  100)
        }
        refresh()


       