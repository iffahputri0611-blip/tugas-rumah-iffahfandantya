// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console
// 1. Pesan pertama ke Console
console.log("Halo, saya Iffah!");
console.log("Ini latihan JavaScript pertamaku.");
// 2. Data siswa
const nama = "Iffah Fandantya Anggara Putri";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;
console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS $
{nilaiUas}`);
// 3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;
function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}
function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);
    return `${namaSiswa}: rata-rata ${rata}, predikat $
{predikat(rata)}`;
}