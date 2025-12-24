function login(username, password) {
    if (username === "admin" && password === "12345") {
        console.log("✅ LOGIN SUKSES! Selamat datang, Administrator.");  // ← UBAH BARIS INI
        return true;
    } else {
        console.log("Login gagal! Username atau password salah.");
        return false;
    }
}

// Test function
login("admin", "12345");