package com.fasteat.fasteat_api.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class UsuarioTest {

    @Test
    public void testUsuarioConstructor() {
        Usuario usuario = new Usuario("John Doe", "john.doe@example.com");
        assertEquals("John Doe", usuario.getNombre());
        assertEquals("john.doe@example.com", usuario.getEmail());
    }

    @Test
    public void testSettersAndGetters() {
        Usuario usuario = new Usuario();
        usuario.setNombre("Jane Doe");
        usuario.setEmail("jane.doe@example.com");
        usuario.setIdUsuario(1);

        assertEquals("Jane Doe", usuario.getNombre());
        assertEquals("jane.doe@example.com", usuario.getEmail());
        assertEquals(1, usuario.getIdUsuario());
    }

    @Test
    public void testEquals() {
        Usuario usuario1 = new Usuario("John Doe", "john.doe@example.com");
        usuario1.setIdUsuario(1);
        Usuario usuario2 = new Usuario("Jane Doe", "jane.doe@example.com");
        usuario2.setIdUsuario(1);

        assertTrue(usuario1.equals(usuario2));
    }

    @Test
    public void testNotEquals() {
        Usuario usuario1 = new Usuario("John Doe", "john.doe@example.com");
        usuario1.setIdUsuario(1);
        Usuario usuario2 = new Usuario("Jane Doe", "jane.doe@example.com");
        usuario2.setIdUsuario(2);

        assertFalse(usuario1.equals(usuario2));
    }

    @Test
    public void testHashCode() {
        Usuario usuario1 = new Usuario("John Doe", "john.doe@example.com");
        usuario1.setIdUsuario(1);
        Usuario usuario2 = new Usuario("Jane Doe", "jane.doe@example.com");
        usuario2.setIdUsuario(1);

        assertEquals(usuario1.hashCode(), usuario2.hashCode());
    }
}