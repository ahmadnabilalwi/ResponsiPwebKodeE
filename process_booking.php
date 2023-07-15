<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $package = $_POST['package'];

    // Validasi formulir (contoh: memastikan nama dan paket tidak kosong)
    if (!empty($name) && !empty($package)) {
        // Format data booking
        $bookingData = "Nama: $name | Paket: $package" . PHP_EOL;

        // Simpan data booking ke file
        $file = fopen('booking.txt', 'a');
        fwrite($file, $bookingData);
        fclose($file);

        // Redirect ke halaman baru dengan pesan
        header('Location: beranda.html?message=Booking%20Anda%20telah%20berhasil');
        exit();
    }
}
?>
