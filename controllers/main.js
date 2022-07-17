module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getProductByType: async(req, res) => {
        try{
          
            const product = req.query.product_type
            const brand = req.query.brand
            if (typeof product !== undefined && typeof brand !== undefined){

                const makeUpProducts = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}&brand=${brand}`)
                const products =  await makeUpProducts.json()
                if(products.length < 1){
                    //SHOW PRODUCT NOT FOUND
                }
                console.log(products.length)
                // console.log(req.query.brand)
                // console.log(typeof req.query.product_type)
                res.render('product.ejs', {products: products})

            }else if (typeof product !== undefined){
                const makeUpProductsByBrandOnly = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${product}`)
                const products =  await makeUpProductsByBrandOnly.json()
                
                res.render('product.ejs', {products: products})
            }else if (typeof brand !== undefined){
                const makeUpProductsByProductsOnly = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
                const onlyProducts =  await makeUpProductsByProductsOnly.json()
                res.render('product.ejs', {products: onlyProducts})
            }else {

               
            }
            
           
        }catch(err){
            console.log(err)
        }
    }
   
}



