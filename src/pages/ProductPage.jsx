import ProductList from '../component/ProductList';

// 接收從 App.jsx 傳過來的 Props
const ProductPage = ({ 
    products, 
    pagination, 
    getDatas, 
    openModal, 
    checkLogin,
    addToCart
}) => {
    
    // ⚠️ 這裡原本重複的 useState 和函式（如 getDatas, openModal 等）通通都要刪除！
    // 因為它們現在都統一由 App.jsx 集中管理並透過 Props 傳入。

    return (
        <>
            <h1 className="text-dark text-center mt-3">產品列表</h1>
            
            <div className="container mt-5">
                <div className="row">
                    {/* 產品列表 */}
                    <ProductList
                        openModal={openModal}
                        checkLogin={checkLogin}
                        products={products}
                        pagination={pagination}
                        onChangePages={getDatas}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductPage;