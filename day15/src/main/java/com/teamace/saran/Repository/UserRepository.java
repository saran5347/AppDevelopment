package com.teamace.saran.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.saran.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
