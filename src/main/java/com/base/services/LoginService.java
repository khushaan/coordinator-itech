package com.base.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONObject;

import com.base.DTO.Error;
import com.base.DTO.User;

@Path("/login")
public class LoginService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/get")
	public Response getMyDude() {

		String s = "Greeting Khushaan";

		return Response.status(201).entity(s).build();

	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/authenticate")
	public Response loginUser(User user) {

		Error e = new Error();
		if (!user.getName().isEmpty() && !user.getpassword().isEmpty()) {
			if (user.getName().equals("khushaan") && user.getpassword().equals("admin123")) {
				e.setErrorMsg("Valid User");
				return Response.status(201).entity(e).build();
			}
		}

		e.setErrorMsg("Invalid User");

		return Response.status(201).entity(e).build();

	}

}
