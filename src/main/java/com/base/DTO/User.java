package com.base.DTO;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User {
	
	
	@XmlElement private String name; 
	
	
	@XmlElement private String password;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String passWord) {
		this.password = passWord;
	}
	@Override
	public String toString() {
		return "User [name=" + name + ", passWord=" + password + "]";
	} 
	
	
	
	
}
