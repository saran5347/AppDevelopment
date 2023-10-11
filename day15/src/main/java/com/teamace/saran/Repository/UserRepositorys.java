package com.teamace.saran.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.saran.Model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
