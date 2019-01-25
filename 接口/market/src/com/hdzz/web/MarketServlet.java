package com.hdzz.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonNull;
import com.hdzz.service.MarketService;

/**
 * Servlet implementation class MarketServlet
 */
@WebServlet("/MarketServlet")
public class MarketServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private MarketService ms = new MarketService();
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//状态分发，根据请求的状态，来执行对应的方法。
//		在提交请求时给定参数state，由state来指定请求进入到service方法后具体执行的请求处理方法，从而实现同一个请求使用不同参数实现同一模块的不同功能。
		//根据在url中传递的参数不同调用不同的方法生成不同的接口 可以做页面的跳转
		String state =  request.getParameter("state");
		
		if(state.equals("getAll")) {
			//查询所有的手机信息。http://localhost:8080/market/list?state=getAll
			this.getAll(request,response);
			//查询手机。http://localhost:8080/market/list?state=search&changes="p"
			//http://localhost:8080/market/list?state=search&changes="l"
		}else if(state.equals("search")){
			this.getType(request, response);
			//获取前三条数据http://localhost:8080/market/list?state=getTop&3
			//0 3 6
		}else if(state.equals("getTop")){
		this.getTop(request, response);
	}
	}
	//一次性获得20条杂志信息 。Magazine
	protected void getAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		String returnJson = ms.getMagazineByJson();
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
//	搜索功能
	protected void getType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		//解决request中的乱码问题 指定request中打开编码格式 只对post有效
//		request.setCharacterEncoding("UTF-8");
		//获取url后面所带的参数得到的是个字符串
		//手动解决request中的乱码问题
//		 String type = request.getParameter("changes");
//		 type = new String(type.getBytes("iso8859-1"),"UTF-8");
		String value=request.getQueryString();	
		
//		将url后面的字符串按指定字符转化成数组 
//		System.out.println(type);	
		String[] valueArray = value.split("&"); 
//		for (String values : valueArray) {
//			System.out.println(values);
//		}	
		System.out.println(valueArray[1]);
		 //将url中取出的数据将格式转为中文
		String s=java.net.URLDecoder.decode(valueArray[1],"UTF-8");

		String returnJson = ms.getMagazineTypeByJson(s);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
	protected void getTop(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** 设置后台跨域 */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		String value=request.getQueryString();
		String[] valueArray = value.split("&");
		String returnJson = ms.getMagazinetopByJson(valueArray[1]);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
}
