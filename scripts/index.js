document.addEventListener('DOMContentLoaded', function(params) {
    console.log('DOM loaded!');

    const form = document.querySelector('main > section > form');
    console.log(form);

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            console.log('Submiting ...');

            const filter = iSearch.value;

            if (filter !== '') {
                const dataRequest = await fetch('json/data.json');
                const dataJson = await dataRequest.json();

                const products = dataJson.products;

                let filtered = products.filter(p => p.productName.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
                console.log(filtered);

                if (filtered.length > 0) {
                    lResults.innerHTML = '';
                    filtered.forEach(p => {
                        const li = document.createElement('li');
                        li.classList.add('list-group-item');
                        const a = document.createElement('a'); /*si cambio la "a" por una "p" deja de ser enlaces*/
                        a.classList.add('row');
                        a.classList.add('align-items-center');
                        a.setAttribute('href', `detalle.html?id=${p.id}&productName=${p.productName}&unitPrice=${p.unitPrice}`);
                        /*id, productName y unitPrice deben coincidir aquí en línea 31 y en las filas 86, 93 y 100 de detalle.html*/

                        let pr = document.createElement('p');
                        pr.classList.add('col-4'); /*inicialmente tenía un col-8 pero en el celular se ve mal*/
                        pr.innerHTML = p.productName;
                        pr.innerHTML += `<br/><small>${p.category.categoryName}</small>`;
                        a.appendChild(pr);

                        let pr2 = document.createElement('p');
                        pr2.classList.add('col-2');
                        pr2.innerText = `${p.unitPrice}`;
                        a.appendChild(pr2);

                        let pr3 = document.createElement('p'); /*cambio la "p" por una "a" para que el ícono sea un enlace*/
                        pr3.classList.add('col-1');
                        pr3.innerHTML = '<i class="fas fa-angle-double-right"></i>';
                        /*pr3.setAttribute('href',`detalle.html?id=${p.id}`);*/
                        a.appendChild(pr3);

                        li.appendChild(a);

                        lResults.appendChild(li);
                    });
                }
            }
        });
    }
});