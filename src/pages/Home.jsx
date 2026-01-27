const Home=({checkLogin})=>{
    return(
        <div>
            <h1 className="text-center text-dark">
                歡迎來到首頁!
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col mt-2 ">
                        <h4 className='text-secondary '>
                            請點擊上方鏈結來移動至你想要到的頁面
                        </h4>
                        <button type="button" className="btn btn-outline-danger mt-2" onClick={checkLogin}>
                            檢查登入狀態
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Home;