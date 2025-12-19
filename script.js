async function connectBackend() {
  try {
    // URL backend của bạn (Render cung cấp)
    const response = await fetch("https://backend-node-render-kscc.onrender.com");

    // Chuyển dữ liệu nhận được sang JSON
    const data = await response.json();

    // Hiển thị nội dung lên alert
    alert("Kết nối thành công! Thông điệp từ backend: " + data.message);
  } catch (error) {
    console.error("Lỗi khi kết nối backend:", error);
    alert("Không thể kết nối tới backend!");
  }
}