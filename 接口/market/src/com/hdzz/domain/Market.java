package com.hdzz.domain;

import java.io.Serializable;

public class Market implements Serializable{
	private String type;
	private int id;
	private String url;
	private String title;
	private int price;
	private String details;
	private String service;
	private int count;
	private String style;
	private String color;
	private String name;
	private String changes;
	private String na;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getStyle() {
		return style;
	}
	public void setStyle(String style) {
		this.style = style;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getChanges() {
		return changes;
	}
	public void setChanges(String changes) {
		this.changes = changes;
	}
	public String getNa() {
		return na;
	}
	public void setNa(String na) {
		this.na = na;
	}
	public Market(String type, int id, String url, String title, int price,
			String details, String service, int count, String style,
			String color, String name, String changes, String na) {
		super();
		this.type = type;
		this.id = id;
		this.url = url;
		this.title = title;
		this.price = price;
		this.details = details;
		this.service = service;
		this.count = count;
		this.style = style;
		this.color = color;
		this.name = name;
		this.changes = changes;
		this.na = na;
	}
	public Market() {
		super();
	}
	@Override
	public String toString() {
		return "Market [type=" + type + ", id=" + id + ", url=" + url
				+ ", title=" + title + ", price=" + price + ", details="
				+ details + ", service=" + service + ", count=" + count
				+ ", style=" + style + ", color=" + color + ", name=" + name
				+ ", changes=" + changes + ", na=" + na + "]";
	}
	
	
	
}
