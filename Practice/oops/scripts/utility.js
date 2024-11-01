var svc=new ProductService();

const acceptProductFromUI=()=>{
    //get data from controls and create product json object
    
    let txtId=document.getElementById("id");
    let txtTitle=document.getElementById("title");
    let txtDescription=document.getElementById("description");
    let txtUnitPrice=document.getElementById("unitprice");
    let txtStockAvailable=document.getElementById("stockavailable");

    let id=parseInt(txtId.value);
    let title=txtTitle.value;
    let description=txtDescription.value;
    let unitPrice=parseInt(txtUnitPrice.value);
    let stockAvailable=parseInt(txtStockAvailable.value);

    let product={
        id:id,
        title:title,
        description:description,
        unitprice:unitPrice,
        stockavailable:stockAvailable
    }
    return product;
}


 
const displayAllProducts=(products)=>{
    let lstProducts=document.getElementById("list");

    //remove child nodes if exist
    //clear all items from list
    if(lstProducts.hasChildNodes){
        while(lstProducts.firstChild)
            {
                lstProducts.removeChild(lstProducts.firstChild);
            } 
    }
    
    //get all products and fill inside list
    products.map((product)=>{
        const node = document.createElement("li");
        const textnode = document.createTextNode(product.title);
        node.appendChild(textnode);
        lstProducts.appendChild(node);
    })
}

const displayProduct=(product)=>{
    //get data from controls and create product json object
    let txtId=document.getElementById("id");
    let txtTitle=document.getElementById("title");
    let txtDescription=document.getElementById("description");
    let txtUnitPrice=document.getElementById("unitprice");
    let txtStockAvailable=document.getElementById("stockavailable");
    
    txtId.value=product.id;
    txtTitle.value=product.title;
    txtDescription.value=product.description;
    txtUnitPrice.value=product.unitPrice;
    txtStockAvailable.value=product.stockAvailable;
}

const onShowAll=()=>{
    let products=svc.getAll();
    displayAllProducts(products);
}

const onInsert=()=>{
    let product=acceptProductFromUI();
    svc.create(product);
    displayAllProducts(svc.getAll());
}

const onUpdate=()=>{
    let product=acceptProductFromUI();
    svc.update(product);
    displayAllProducts(svc.getAll());
}

const onRemove=()=>{
    let product=acceptProductFromUI();
    svc.remove(product.id);
    displayAllProducts(svc.getAll);
};

