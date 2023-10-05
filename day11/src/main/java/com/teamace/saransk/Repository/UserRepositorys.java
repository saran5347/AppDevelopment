package com.teamace.saransk.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.saransk.Model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByUsername(String username);
}
