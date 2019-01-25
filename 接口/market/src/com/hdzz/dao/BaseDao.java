package com.hdzz.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.hdzz.domain.Market;
import com.hdzz.domain.Shop;

public class BaseDao {
	private static String driver = "com.mysql.jdbc.Driver";
	private static String url = "jdbc:mysql://localhost:3306/market?characterEncoding=utf-8";
	private static String user = "root";
	private static String pwd = "tong";
	private static Connection conn = null;//���ݿ����Ӷ���
	private static Statement sta = null;//���ݿ�ִ�ж���
	private static ResultSet result = null;//���������
	static {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url, user, pwd);
			sta = conn.createStatement();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// ��ʼ��ʽ�������ݿ� ��
		// ��Զ�ĵ�һ�� �������ݿ�������
	}
	
	
	//��װһ����ѯ���� ���÷����������ǲ�ѯ���ݣ����ҽ���ѯ����Զ���װ����װ��һ��ListǶ��ʵ����������� ��
	public List<Market> getMagazine(String sql) throws Exception{
		List<Market> list = new ArrayList<Market>();
		//�����ݿ��в�ѯ���ݣ�Ȼ���װ����������� ��Ȼ���ٰѶ���ŵ�List�����С�
	
		//ִ�д��ݹ�����sql��� ��
		result = sta.executeQuery(sql);
		//�����������
		while(result.next()) {
			String type = result.getString("type");
			int id = result.getInt("id");
			String url = result.getString("url");
			String title = result.getString("title");
			int price = result.getInt("price");
			String details = result.getString("details");
			String service = result.getString("service");
			int count = result.getInt("count");
			String style = result.getString("style");
			String color = result.getString("color");
			String name = result.getString("name");
			String changes = result.getString("changes");
			String na = result.getString("na");
			//�������󡣽����ݷ�װ�������С�
			Market mg = new Market(type, id, url, title, price, details, service, count, style,color,name,changes,na);
			list.add(mg);
		}
		return list;
	}
	//��װһ����ѯ���� ���÷����������ǲ�ѯ���ݣ����ҽ���ѯ����Զ���װ����װ��һ��ListǶ��ʵ����������� ��
	public List<Shop> getMagazines(String sql) throws Exception{
		List<Shop> list = new ArrayList<Shop>();
		//�����ݿ��в�ѯ���ݣ�Ȼ���װ����������� ��Ȼ���ٰѶ���ŵ�List�����С�
		
		//ִ�д��ݹ�����sql��� ��
		result = sta.executeQuery(sql);
		//�����������
		while(result.next()) {
			String type = result.getString("type");
			int id = result.getInt("id");
			String url = result.getString("url");
			String title = result.getString("title");
			int price = result.getInt("price");
			String details = result.getString("details");
			String service = result.getString("service");
			int count = result.getInt("count");
			String style = result.getString("style");
			String color = result.getString("color");
			String name = result.getString("name");
			String changes = result.getString("changes");
			String na = result.getString("na");
			//�������󡣽����ݷ�װ�������С�
			Shop mg = new Shop(type, id, url, title, price, details, service, count, style,color,name,changes,na);
			list.add(mg);
		}
		return list;
	}
//ִ����ɾ�Ĳ���
	public  int getupdate(String sql) throws Exception{
		//ִ�д��ݹ�����sql��� ��
		return sta.executeUpdate(sql);
	}

}
