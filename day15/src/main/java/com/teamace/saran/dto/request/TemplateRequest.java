package com.teamace.saran.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TemplateRequest {
	
	private Long id;
	private String firstname;
	private String lastname;
	private String email;
	private String phoneno;
	private String education;
	private String cgpa;

}
