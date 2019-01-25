package com.hdzz.test;

import java.util.List;

import com.google.gson.Gson;
import com.hdzz.dao.BaseDao;
import com.hdzz.domain.Shop;

public class DaoTestShop {
	public static void main(String[] args) {
		BaseDao dao = new BaseDao();
		String sql = "select * from shop";
		List<Shop> list = null; 
		try {
			 list = dao.getMagazines(sql);
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

