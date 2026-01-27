import Edit from "../component/Edit";

const ProductEdit=({openModal,checkLogin,products,pagination,getDatas})=>{
    return (
        <>
            <h1 className="text-dark text-center mt-3">產品編輯</h1>

            <div className='container mt-5'>
                <div className='row'>
                    <Edit
                        openModal={openModal}
                        checkLogin={checkLogin}
                        products={products}
                        pagination={pagination}
                        onChangePages={getDatas}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductEdit;
