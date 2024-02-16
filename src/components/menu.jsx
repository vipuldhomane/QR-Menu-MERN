

const Menu = ({items}) => {
  return (
    <main className='product-space'>
        <div className='container'>
        <div className="row">
        {
            items.map((menuItems, index) => {
                const {id,title,img,desc,price} = menuItems;
                return (
                    <div className='col-md-6' key={index}>
                       <article key={id} className="main-div">
                       <div className="main-img">
                            <img src={img} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">
                                    <h4>{title}</h4>
                                    <h6>${price}</h6>
                                </div>
                                <p>{desc}</p>
                            </div>

                       </article>
                        
                    </div>
                )
    
            })
       }
        </div>
    

    </div>
    </main>
  )
}

export default Menu