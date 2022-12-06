
/**
 * Mô hình 3 khối Bài 1
 * Input: Ngày, tháng, năm
 * Process: Xử lý so sánh
 * Output: Ngày hôm sau và ngày hôm trước
 */


function timNgayTiepTheo() {
    var txtNgay = document.getElementById('txtNgay').value * 1;
    var txtThang = document.getElementById('txtThang').value * 1;
    var txtNam = document.getElementById('txtNam').value * 1;

    var ketQuaNgay;
    var ketQuaThang;
    var ketQuaNam;

    if (txtNgay == 31 && txtThang == 12) {
        ketQuaNgay = 1
        ketQuaThang = 1
        ketQuaNam = txtNam + 1
    } else if (txtNgay < 31 && txtThang <= 12) {
        ketQuaNgay = txtNgay + 1
        ketQuaThang = txtThang
        ketQuaNam = txtNam
    } else if (txtNgay == 31 && txtThang < 12) {
        ketQuaNgay = 1
        ketQuaThang = txtThang + 1
        ketQuaNam = txtNam
    }

    var ketQuaNgayMai = document.getElementById('ketQuaNgayTiepTheo')

    ketQuaNgayMai.value = `Ngày mai là: ngày ${ketQuaNgay} tháng ${ketQuaThang} năm ${ketQuaNam}`
}

function timNgayHomQua() {
    var txtNgay = document.getElementById('txtNgay').value * 1;
    var txtThang = document.getElementById('txtThang').value * 1;
    var txtNam = document.getElementById('txtNam').value * 1;

    var ketQuaNgay;
    var ketQuaThang;
    var ketQuaNam;

    if (txtNgay == 1 && txtThang == 1) {
        ketQuaNgay = 31
        ketQuaThang = 12
        ketQuaNam = txtNam - 1
    } else if (txtNgay <= 31 && txtThang <= 12) {
        ketQuaNgay = txtNgay - 1
        ketQuaThang = txtThang
        ketQuaNam = txtNam
    }

    var ketQuaHomTruoc = document.getElementById('ketQuaNgayHomTruoc')

    ketQuaHomTruoc.value = `Ngày hôm qua là: ngày ${ketQuaNgay} tháng ${ketQuaThang} năm ${ketQuaNam}`
}


/**
 * Mô hình 3 khối Bài 2
 * Input: Ngày, tháng, năm
 * Process: Xử lý so sánh
 * Output: Số ngày trong tháng (kể cả năm nhuận)
 */

function tinhNgayTrongThang() {
    var txtThang = document.getElementById('txtThang2').value * 1;
    var txtNam = document.getElementById('txtNam2').value * 1;

    var namNhuan = txtNam % 4
    var textNhuan = ''
    console.log(namNhuan);
    var ketQua
    // switch (namNhuan) {
    //     case 0:
    //         switch (txtThang) {
    //             case 2:
    //                 ketQua = 29
    //             case 1:
    //             case 3:
    //             case 5:
    //             case 7:
    //             case 8:
    //             case 10:
    //             case 12:
    //                 ketQua = 31
    //                 break;
    //             case 4:
    //             case 6:
    //             case 9:
    //             case 11:
    //                 ketQua = 30
    //                 break;
    //         }
    // }
    // switch (txtThang) {
    //     case 1:
    //     case 3:
    //     case 5:
    //     case 7:
    //     case 8:
    //     case 10:
    //     case 12:
    //         ketQua = 31
    //         break;
    //     case 2:
    //         ketQua = 28
    //         break;
    //     case 4:
    //     case 6:
    //     case 9:
    //     case 11:
    //         ketQua = 30
    //         break;
    // }
    if (namNhuan == 0) {
        if (txtThang == 2) {
            textNhuan = 'năm nhuận'
            ketQua = 29
        } else if (txtThang == 1 || txtThang == 3 ||
            txtThang == 5 || txtThang == 7 ||
            txtThang == 8 || txtThang == 10 || txtThang == 12) {
            ketQua = 31
        } else if (txtThang == 4 || txtThang == 6 || txtThang == 9 || txtThang == 11) {
            ketQua = 30
        }
    } else {
        if (txtThang == 2) {
            ketQua = 28
        } else if (txtThang == 1 || txtThang == 3 ||
            txtThang == 5 || txtThang == 7 ||
            txtThang == 8 || txtThang == 10 || txtThang == 12) {
            ketQua = 31
        } else if (txtThang == 4 || txtThang == 6 || txtThang == 9 || txtThang == 11) {
            ketQua = 30
        }
    }
    var htmlKetQua = document.getElementById('ketQua')

    htmlKetQua.value = `Số ngày trong tháng ${txtThang} năm ${txtNam} (${textNhuan})     là: ${ketQua} ngày`
}

/**
 * Mô hình 3 khối Bài 3
 * Input: Số nguyên có 3 chữ số
 * Process: Xử lý 3 chữ số nhập vào
 * Output: Cho ra cách đọc 3 số nguyên vừa nhập
 */

function docSoDonVi(soDonVi) {
    var cachDocSo1
    switch (soDonVi) {
        case 0:
            cachDocSo1 = ''
            break;
        case 1:
            cachDocSo1 = 'Mốt'
            break;
        case 2:
            cachDocSo1 = 'Hai'
            break;
        case 3:
            cachDocSo1 = 'Ba'
            break;
        case 4:
            cachDocSo1 = 'Bốn'
            break;
        case 5:
            cachDocSo1 = 'Lăm'
            break;
        case 6:
            cachDocSo1 = 'Sáu'
            break;
        case 7:
            cachDocSo1 = 'Bảy'
            break;
        case 8:
            cachDocSo1 = 'Tám'
            break;
        case 9:
            cachDocSo1 = 'Chín'
            break;
    }
    return cachDocSo1;
}

function docSoHangChuc(soChuc) {
    var cachDocSo2
    switch (soChuc) {
        case 0:
            cachDocSo2 = 'Lẻ'
            break;
        case 1:
            cachDocSo2 = 'Mười'
            break;
        case 2:
            cachDocSo2 = 'Hai mươi'
            break;
        case 3:
            cachDocSo2 = 'Ba mươi'
            break;
        case 4:
            cachDocSo2 = 'Bốn mươi'
            break;
        case 5:
            cachDocSo2 = 'Năm mươi'
            break;
        case 6:
            cachDocSo2 = 'Sáu mươi'
            break;
        case 7:
            cachDocSo2 = 'Bảy mươi'
            break;
        case 8:
            cachDocSo2 = 'Tám mươi'
            break;
        case 9:
            cachDocSo2 = 'Chín mươi'
            break;
    }
    return cachDocSo2;
}


function docSoHangTram(soTram) {
    var cachDocSo3
    switch (soTram) {
        case 0:
            cachDocSo3 = 'Không trăm'
            break;
        case 1:
            cachDocSo3 = 'Một trăm'
            break;
        case 2:
            cachDocSo3 = 'Hai trăm'
            break;
        case 3:
            cachDocSo3 = 'Ba trăm'
            break;
        case 4:
            cachDocSo3 = 'Bốn trăm'
            break;
        case 5:
            cachDocSo3 = 'Năm trăm'
            break;
        case 6:
            cachDocSo3 = 'Sáu trăm'
            break;
        case 7:
            cachDocSo3 = 'Bảy trăm'
            break;
        case 8:
            cachDocSo3 = 'Tám trăm'
            break;
        case 9:
            cachDocSo3 = 'Chín trăm'
            break;
    }
    return cachDocSo3;
}

function docSoNguyen() {
    var txtSoNguyenNhapVao = document.getElementById('txtSoNguyen').value * 1

    var soDonVi = txtSoNguyenNhapVao % 10
    var soTram = Math.floor(txtSoNguyenNhapVao / 100)
    var soChuc = Math.floor(txtSoNguyenNhapVao / 10) % 10

    var cachDocSoDonVi = docSoDonVi(soDonVi)
    var cachDocSoChuc = docSoHangChuc(soChuc)
    var cachDocSoTram = docSoHangTram(soTram)


    var htmlKetQua = document.getElementById('ketQuaDoc')

    htmlKetQua.value = `${cachDocSoTram} ${cachDocSoChuc} ${cachDocSoDonVi}` 
}