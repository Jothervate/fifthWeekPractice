import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE,API_PATH } from '../Constants/config';
// 1. 記得引入 Details 元件
import Details from '../component/Details';

const DetailPage=()=>{

    const {id}= useParams();
    const [product,setProducts]= useState(null);
    const navigate= useNavigate();

    useEffect(()=>{
        const getSingleProduct= async()=>{
            try{
                //呼叫取得某一品項的id
                const res = await axios.get(`${API_BASE}/api/${API_PATH}/product/${id}`);
                setProducts(res.data.product);
            }catch(err){
                alert('找不到資料!');
                console.log(err.data)
                navigate('/products');//回產品列表
            }
        };
        if (id) getSingleProduct();
    },[id,navigate]);

    if (!product) return (<div className="container mt-5">
        <h3>
            載入中...
        </h3>
    </div>);


return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {/* 3. 使用元件 */}
                    <Details 
                        item={product} 
                        onClose={() => navigate('/products')} 
                    />
                </div>
            </div>
        </div>
    );
}

export default DetailPage;