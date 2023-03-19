$(function(){

    const two    =   document.getElementById("servicos")
    const one    =   document.getElementById("empresa")
    const text   =   document.getElementById("textBox-about")
    const title  =   document.getElementById("titleBox-about")   
    const sub    =   document.getElementById("subTitle-about")    
    const box    =   document.getElementById("box-hidden");   


    one.addEventListener("click", function(){

        //button events
        one.classList.add("bg-main")
        one.classList.add("text-white")

        two.classList.remove("bg-main")
        two.classList.remove("text-white")
        two.classList.add("text-secondary")

        //innerHTML
        title.innerHTML =  `A DiskTáxi é uma empresa com 30 anos de mercado!`
        text.innerHTML  =  `<p class-"mb-8">Temos uma frota de carros espalhada por toda grande João Pessoa, com motoristas de <b class="uppercase title">confiança</b> para você ter uma experiência <b class="uppercase title">incrível! Aceitamos todas as formas de pagamento!</b></p>
            <br>
        <p></p>Somos a empresa de táxi pioneira em aplicativos, tendo sido lançada em 2011 com um sistema de corrida totalmente eletrônico.</p>`    

    })

    two.addEventListener("click", function(){

        //buttons events
        two.classList.add("bg-main")
        two.classList.add("text-white")

        one.classList.remove("bg-main")
        one.classList.remove("text-white")
        one.classList.add("text-secondary")

        //innerHTML
        title.innerHTML =  `Peça de qualquer lugar!`
        text.innerHTML  =  `<p class-"mb-8"><b class="uppercase title">você</b> pode pedir seu táxi <b class="uppercase title">através dos telefones</b> da nossa central, pelo nosso <b class="uppercase title">whatsapp</b> ou por nosso <b class="uppercase title">aplicativo</b></p>
            <br>
        <p>A DisTáxi também tem uma <b class="uppercase title">especialidade de prestação de serviços</b> para você que possui empresas</p>`
        
    })
})
