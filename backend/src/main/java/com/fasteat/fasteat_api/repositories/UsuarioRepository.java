package com.fasteat.fasteat_api.repositories;

import com.fasteat.fasteat_api.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}