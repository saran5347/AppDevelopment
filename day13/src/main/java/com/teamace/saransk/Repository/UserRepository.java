package com.teamace.saransk.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.saransk.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
