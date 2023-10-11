package com.teamace.saran.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TemplateResponse {
	
	private Long id;
	private String firstname;
	private String lastname;
	private String email;
	private String phoneno;
	private String education;
	private String cgpa;
}
