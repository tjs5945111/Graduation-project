package com.hdzz.test;


import java.util.List;

import com.google.gson.Gson;
import com.hdzz.dao.BaseDao;
import com.hdzz.domain.Market;

public class DaoTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		将url后面的字符串按指定字符转化成数组
//		String numbers = "start=0&count=10"; 
//		String[] numberArray = numbers.split("&"); 
//		for (String string : numberArray) {
//			System.out.println(string);
//		}		
		BaseDao dao = new BaseDao();
		String sql = "select * from list";
		List<Market> list = null;
		try {
			 list = dao.getMagazine(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		/*for (Magazine magazine : list) {
			System.out.println(magazine);
		}*/
		Gson gson = new Gson();
		String result = gson.toJson(list);
		System.out.println(result);
	
	}

}
