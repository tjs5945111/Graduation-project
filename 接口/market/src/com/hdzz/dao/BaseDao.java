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
	private static Connection conn = null;//数据库连接对象。
	private static Statement sta = null;//数据库执行对象。
	private static ResultSet result = null;//结果集对象。
	static {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url, user, pwd);
			sta = conn.createStatement();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 开始正式连接数据库 。
		// 永远的第一步 加载数据库驱动。
	}
	
	
	//封装一个查询方法 ，该方法的作用是查询数据，并且将查询结果自动封装，封装成一个List嵌套实体类对象类型 。
	public List<Market> getMagazine(String sql) throws Exception{
		List<Market> list = new ArrayList<Market>();
		//从数据库中查询数据，然后封装结果到对象中 ，然后再把对象放到List集合中。
	
		//执行传递过来的sql语句 。
		result = sta.executeQuery(sql);
		//操作结果集。
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
			//创建对象。将数据封装到对象中。
			Market mg = new Market(type, id, url, title, price, details, service, count, style,color,name,changes,na);
			list.add(mg);
		}
		return list;
	}
	//封装一个查询方法 ，该方法的作用是查询数据，并且将查询结果自动封装，封装成一个List嵌套实体类对象类型 。
	public List<Shop> getMagazines(String sql) throws Exception{
		List<Shop> list = new ArrayList<Shop>();
		//从数据库中查询数据，然后封装结果到对象中 ，然后再把对象放到List集合中。
		
		//执行传递过来的sql语句 。
		result = sta.executeQuery(sql);
		//操作结果集。
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
			//创建对象。将数据封装到对象中。
			Shop mg = new Shop(type, id, url, title, price, details, service, count, style,color,name,changes,na);
			list.add(mg);
		}
		return list;
	}
//执行增删改操作
	public  int getupdate(String sql) throws Exception{
		//执行传递过来的sql语句 。
		return sta.executeUpdate(sql);
	}

}
