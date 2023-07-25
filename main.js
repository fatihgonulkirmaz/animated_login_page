const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') /*içerği harflere böler yani epostaya imleç tutulunca her harf ayrı ayrı hareket eder.*/ 
        .map((letter, index) => /*her harf ve indeks için belirtilen işlemi gerçekleştir*/ 
            `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
            /*Bu ifade, her harf için bir <span> etiketi oluşturur 
            ve style özelliği içinde transition-delay ile animasyon gecikmesini belirler.
             index değişkeni, harfin indeksini temsil eder
              ve bu sayede her harfin gecikmeli bir şekilde görünmesini sağlar.*/ 
        )
        .join(''); /*her şeyi birleştirir*/ 
});
