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
		//״̬�ַ������������״̬����ִ�ж�Ӧ�ķ�����
//		���ύ����ʱ��������state����state��ָ��������뵽service���������ִ�е������������Ӷ�ʵ��ͬһ������ʹ�ò�ͬ����ʵ��ͬһģ��Ĳ�ͬ���ܡ�
		//������url�д��ݵĲ�����ͬ���ò�ͬ�ķ������ɲ�ͬ�Ľӿ� ������ҳ�����ת
		String state =  request.getParameter("state");
		
		if(state.equals("getAll")) {
			//��ѯ���е��ֻ���Ϣ��http://localhost:8080/market/list?state=getAll
			this.getAll(request,response);
			//��ѯ�ֻ���http://localhost:8080/market/list?state=search&changes="p"
			//http://localhost:8080/market/list?state=search&changes="l"
		}else if(state.equals("search")){
			this.getType(request, response);
			//��ȡǰ��������http://localhost:8080/market/list?state=getTop&3
			//0 3 6
		}else if(state.equals("getTop")){
		this.getTop(request, response);
	}
	}
	//һ���Ի��20����־��Ϣ ��Magazine
	protected void getAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** ���ú�̨���� */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		String returnJson = ms.getMagazineByJson();
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
//	��������
	protected void getType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** ���ú�̨���� */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		//���request�е��������� ָ��request�д򿪱����ʽ ֻ��post��Ч
//		request.setCharacterEncoding("UTF-8");
		//��ȡurl���������Ĳ����õ����Ǹ��ַ���
		//�ֶ����request�е���������
//		 String type = request.getParameter("changes");
//		 type = new String(type.getBytes("iso8859-1"),"UTF-8");
		String value=request.getQueryString();	
		
//		��url������ַ�����ָ���ַ�ת�������� 
//		System.out.println(type);	
		String[] valueArray = value.split("&"); 
//		for (String values : valueArray) {
//			System.out.println(values);
//		}	
		System.out.println(valueArray[1]);
		 //��url��ȡ�������ݽ���ʽתΪ����
		String s=java.net.URLDecoder.decode(valueArray[1],"UTF-8");

		String returnJson = ms.getMagazineTypeByJson(s);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
	protected void getTop(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/** ���ú�̨���� */
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		String value=request.getQueryString();
		String[] valueArray = value.split("&");
		String returnJson = ms.getMagazinetopByJson(valueArray[1]);
		response.getWriter().print(returnJson);
//		response.getOutputStream().write((returnJson).getBytes());
	}
}
