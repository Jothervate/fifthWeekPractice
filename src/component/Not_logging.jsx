import axios from "axios";
// 建議將常數統一管理
import { API_BASE } from "../Constants/config";
import {  useNavigate } from "react-router-dom";

const Not_logging = ({ formData, setIsAuth, setFormData, getDatas }) => {
    const navigate= useNavigate() //初始化navigate樣式

    // 1. 處理輸入框變動
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // 2. 處理登入提交
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE}/admin/signin`, formData);
            const { token, expired, message } = res.data;

            alert(message);

            // 存入 Cookie (記得這行要一行寫完，避免換行字元)
            document.cookie = `hexToken=${token}; expires=${new Date(expired).toUTCString()}; path=/`;

            // 設定 Axios 預設 Header，這樣之後的 API (getDatas) 才會帶上權限
            axios.defaults.headers.common['Authorization'] = token;
            
            // 變更狀態為已登入 (父元件會切換顯示內容)
            setIsAuth(true);
            
            // 登入成功後，立刻叫父元件去抓產品資料
            getDatas();

            //並且,登入成功後,預設會先進入首頁
            navigate('/');
            
        } catch (err) {
            const errorMessage = err.response?.data?.message || "發生錯誤，請重新登入！";
            alert(errorMessage);
            setIsAuth(false);
        }
    };

    return (
        <div className="container login"> 
            <h1 className="mt-5">請先登入</h1>
            <form className="form-floating form-signin" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="Email1" className="form-label">電子信箱</label>
                    <input 
                        type="email"
                        name="username" 
                        value={formData.username} 
                        onChange={handleInputChange}    
                        placeholder="Email" 
                        className="form-control" 
                        id="Email1" 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">密碼</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password} 
                        onChange={handleInputChange}
                        placeholder="password" 
                        className="form-control" 
                        id="Password" 
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="CheckBox"/>
                    <label className="form-check-label" htmlFor="CheckBox">記住我</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">提交</button>
            </form>
        </div> 
    );
}

export default Not_logging;