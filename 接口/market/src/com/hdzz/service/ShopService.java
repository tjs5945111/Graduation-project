package com.hdzz.service;

import java.util.List;

import com.google.gson.Gson;
import com.hdzz.dao.BaseDao;
import com.hdzz.domain.Shop;


public class ShopService {
//操作购物车
	private BaseDao dao = new BaseDao();
	//添加
	public String getAddByJson(String id) {
		String sql = "insert into shop select * from list where id="+ id;
		System.out.println(sql);
		int list = 0;
		try {
			list=dao.getupdate(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}
	//删除
	public String getDeleteByJson(String id) {
		String sql = "DELETE FROM shop WHERE id="+ id;
		System.out.println(sql);
		int list = 0;
		try {
			list=dao.getupdate(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}
	//修改（优惠卷 value为优惠卷值）
	public String getAlterByJson(String value,String id) {
		String sql = "update shop set price=((select price from list where id="+id+")-"+value+")where id="+id;
		System.out.println(sql);
		int list = 0;
		try {
			list=dao.getupdate(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}
	//查询购物车商品
	public String getSearchByJson() {
		String sql = "select * from shop";
		System.out.println(sql);
		List<Shop> list = null;
		try {
			list=dao.getMagazines(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}

}
