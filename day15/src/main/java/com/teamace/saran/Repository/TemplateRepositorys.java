package com.teamace.saran.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.saran.Model.Template;


public interface TemplateRepositorys extends JpaRepository<Template,Long> {
	
	  Template findBypid(Long id);
//	  Template deleteBypid(Long id);

}
