window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM está listo");

  aId.addEventListener("click", (event) => {
    event.preventDefault();

    const filter = aId.value;
    console.log(`bSearch clicked Searching ${filter}...`);

    results.innerHTML = "";

    const dataRequest = fetch('json/data.json');
    const dataJson = dataRequest.json();

    const products = dataJson.products;

    products.forEach((p) => {
        
      if (filter != "" && p.id.indexOf(filter) >= 0) {
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = p.id;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = p.productName;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = p.unitPrice;
        tr.appendChild(td);

        results.appendChild(tr);
      } else {
        console.log("No encontrado");
      }
    });
  });
});
