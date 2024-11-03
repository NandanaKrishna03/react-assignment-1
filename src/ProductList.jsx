import Product from "./product"
import "./product.css"
function ProductListing(){
    return(
        <>
        <h1 className="contact-title">Product List</h1>
        <div className="product-list">
            
            < Product  productData={{ img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", Price:"109.95"}} />{/* Reusable component */}
                < Product productData={{img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" ,title:"Mens Casual Premium Slim Fit T-Shirts" ,Price:"22.3"}} />   
                < Product productData={{ img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ,title:"Mens Cotton Jacket", Price:"55.98" }}/>
                < Product productData={{img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" ,title:"Mens Casual Slim Fit", Price:"15.95" }}/>
                < Product productData={{img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" ,title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", Price:"645"}}/>
                < Product productData={{img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" ,title:"Solid Gold Petite Micropave" ,Price:"168"}}/>  
                < Product productData={{img:  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",title:"White Gold Plated Princess" ,Price:"9.99"}}/>  
                < Product productData={{img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" ,title:"Pierced Owl Rose Gold Plated Stainless Steel Double" ,Price:"10.99"}}/>  
                < Product productData={{img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" ,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 " ,Price:"64"}}/>  
                < Product productData={{img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" ,title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s" ,Price:" 109"}}/>  
            </div>
       
        </>
    )
}
export default ProductListing