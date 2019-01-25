package com.hdzz.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hdzz.service.MarketService;
import com.hdzz.service.ShopService;

/**
 * Servlet implementation class ShopService
 */
@WebServlet("/ShopService")
public class ShopServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ShopService ms = new ShopService();
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
String state =  request.getParameter("state");
		
		if(state.equals("getAdd")) {
			//查询购物车添加信息（传一个id）。http://localhost:8080/market/shop?state=getAdd&3
			this.getAdd(request,response);
		}else if(state.equals("getDelete")){
			this.getDelete(request, response);
			//删除购物车商品(传要 删除的id)。http://localhost:8080/market/shop?state=getDelete&1
			
		}else if(state.equals("getAlter")){
			this.getAlter(request, response);
			//(传一个优惠卷面值和对应的id)http://localhost:8080/market/shop?state=getAlter&20&1
			
		}else if(state.equals("getSearch")){
			this.getSearch(request, response);
			//查询购物车商品。http://localhost:8080/market/shop?state=getSearch
			
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void getAdd(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		//获取url后面所带的参数得到的是个字符串
		String value=request.getQueryString();	
//		将url后面的字符串按指定字符转化成数组 
				
		String[] valueArray = value.split("&"); 
//		for (String values : valueArray) {
//			System.out.println(values);
//		}	
		System.out.println(valueArray[1]);
		 //将url中取出的数据将格式转为中文
		String id=java.net.URLDecoder.decode(valueArray[1],"UTF-8");
		 
		String returnJson = ms.getAddByJson(id);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
	protected void getDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		//获取url后面所带的参数得到的是个字符串
		String value=request.getQueryString();	
//		将url后面的字符串按指定字符转化成数组 
				
		String[] valueArray = value.split("&"); 
//		for (String values : valueArray) {
//			System.out.println(values);
//		}	
		System.out.println(valueArray[1]);
		 //将url中取出的数据将格式转为中文
		String id=java.net.URLDecoder.decode(valueArray[1],"UTF-8");
		 
		String returnJson = ms.getDeleteByJson(id);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
	protected void getAlter(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		//获取url后面所带的参数得到的是个字符串
		String value=request.getQueryString();	
//		将url后面的字符串按指定字符转化成数组 
				
		String[] valueArray = value.split("&"); 
//		for (String values : valueArray) {
//			System.out.println(values);
//		}	
		System.out.println(valueArray[1]);
		 //将url中取出的数据将格式转为中文
		String id=java.net.URLDecoder.decode(valueArray[1],"UTF-8");
		String price=java.net.URLDecoder.decode(valueArray[2],"UTF-8");

		String returnJson = ms.getAlterByJson(price,id);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
	protected void getSearch(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");	 
		String returnJson = ms.getSearchByJson();
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}

}
