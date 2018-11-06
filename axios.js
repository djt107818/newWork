// Axios简单封装
import axios from 'axios';
import qs from 'qs';

// const baseUrl = `http://${192.168.1.135:80}/`;en.jingmeiti.com
// const baseUrl= 'http://jianmei.jingmeiti.com/';
const baseUrl= 'http://192.168.1.123:9291/';

const AXIOS = {
    // ip: '192.168.1.135:80',
	// 纯属调取接口
    apiMethod(action,method,param,success,error){
        param = param==null?{ }:param;
        // baseUrl= 'http://' + AXIOS.ip + '/';
        if(method == 'post' || method == 'put' || method == 'patch'){
	        let config = {
	            headers: {
	                'Content-Type': 'application/x-www-form-urlencoded'
	            }
	        };
	        axios[method](baseUrl + action,qs.stringify(param),config)
			.then(function(response) {
			    if(success) {
			        success(response.data);
			    }
			})
			.catch(function(response) {
			    if(error) {
			        error(response.data);
			    }
			});
        }else{
            axios[method](baseUrl + action,{params: param})
			.then(function(response) {
			    if(success) {
			        success(response.data);
			    }
			})
			.catch(function(response) {
			    if(error) {
			        error(response.data);
			    }
			});
        }
    }
}
export default AXIOS