// Menambahkan angka ke textview
function insert(angka){
	document.form.textarea.value = document.form.textarea.value + angka;
}

// Membuat fungsi operasi hitung
function hitung(){
	var hasil = document.form.textarea.value;
	if(hasil == ''){
		alert("Inputkan angka terlebih dahulu")
	}else{
	document.form.textarea.value = eval(hasil);
	}
}
// Menghapus angka di textview
function hapus(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

// Menghapus seluruh angka di textview
function bersihkan(){
	document.form.textarea.value = "";
}
