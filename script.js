
const students = [
    { name: "Rizky", score: 90 },
    { name: "Andi", score: 80 },
    { name: "Budi", score: 65 },
    { name: "Dimas", score: 85 },
    { name: "Raka", score: 70 }
];
console.log("Daftar Nilai Siswa:");
students.forEach(student => {
    console.log(student.name + " : " + student.score);
});
const lulus = students.filter(student => student.score >= 75);
console.log("Siswa yang Lulus:", lulus);
const namaSiswa = students.map(student => student.name);
console.log("Nama Siswa:", namaSiswa);
const nilaiTertinggi = students.find(student => student.score >= 90);
console.log("Siswa dengan Nilai Minimal 90:", nilaiTertinggi);
