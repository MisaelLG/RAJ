import  Product from "../models/Products"

export const createProduct =  async (req, res) =>{

    const {name, category, price} = req.body

    const newProduct = new Product({name, category, price})

     const productSave = await newProduct.save()

     res.status(201).json(productSave)
}
export const getProducts = async (req, res) =>{

    const products = await Product.find()
    res.json(products)
}
export const getProductById = async (req, res) =>{

    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
    
}
export const updateProductById = async (req, res) =>{

    const updateProduct = await Product.findByIdAndUpdate(req.param.productId, req.body,{
        new:true
    })
    res.status(204).json(updateProduct)
    
}
export const deleteProductById = async (req, res) =>{
    
}

