function copyRek() {
    const copyText = document.querySelector(".acc-copy p em");
    
    navigator.clipboard.write(copyText.value);
    alert("No. Rekening berhasil disalin");
}


const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');
// const bar = document.querySelectorAll('.bar');
// const icon = document.querySelector('.icon');

// membuat event click
// pada saat tombol di click, tambahkan class aktif pada class menu
// saat diklik lagi, maka class aktif dihilangkan dari class menu (toggle)
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});