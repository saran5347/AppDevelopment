package com.teamace.saran.Model;

import com.teamace.saran.Model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_template")
public class Template {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
//	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long pid;
	private String firstname;
	private String lastname;
	private String email;
	private String phoneno;
	private String education;
	private String cgpa;
	  @Enumerated(EnumType.STRING)
	private Role role;


}
