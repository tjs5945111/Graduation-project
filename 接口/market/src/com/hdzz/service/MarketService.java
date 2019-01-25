package com.hdzz.service;

import java.util.List;

import com.google.gson.Gson;
import com.hdzz.dao.BaseDao;
import com.hdzz.domain.Market;

public class MarketService {

	private BaseDao dao = new BaseDao();
	public String getMagazineByJson() {
		String sql = "select * from list";
		List<Market> list = null;
		try {
			list=dao.getMagazine(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}
	//
	public String getMagazineTypeByJson(String value) {
		String sql = "select * from list where "+ value;
		System.out.println(sql);
		List<Market> list = null;
		try {
			list=dao.getMagazine(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}
	public String getMagazinetopByJson(String valueArray) {
		String sql = "select * from list where id>"+ valueArray + " limit 3";
		System.out.println(sql);
		List<Market> list = null;
		try {
			list=dao.getMagazine(sql);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String magazineJson=gson.toJson(list);
		return magazineJson;
	}

}
