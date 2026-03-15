     const x01277 = true;
        
		
	function isValidURL(str) {
	  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
	  return !!pattern.test(str);
	}
     function copyURL(txt) {

         var content = txt;

        content.select();
        document.execCommand('copy');

         alert("Copied!");
         
      }

	function addLich(txt){
		window.open("https://calendar.google.com/calendar/r?cid="+encodeURIComponent(txt), "_blank");
	}

	const x01629=()=>{if (!x01277)debugger;}
    setInterval(() => {x01629()}, 10);

    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    const schoolInformation = [
        {
            "sc": "iuh",
            "name": "Trường Đại học Công Nghiệp TP.HCM",
            "tc": "https://sv.iuh.edu.vn/tra-cuu-thong-tin.html",
            "urlChuan": "https://sv.iuh.edu.vn/tra-cuu/lich-hoc-tuan.html?k="
        },
        {
            "sc": "ut",
            "name": "Trường Đại học Giao Thông Vận Tải TP.HCM",
            "tc": "https://sv.ut.edu.vn/tra-cuu-thong-tin.html",
            "urlChuan": "https://sv.ut.edu.vn/tra-cuu/lich-hoc-tuan.html?k="
        },
        {
            "sc": "gdu",
            "name": "Trường Đại học Gia Định",
            "tc": "https://sinhvien.giadinh.edu.vn/tra-cuu-thong-tin.html",
            "urlChuan": "https://sinhvien.giadinh.edu.vn/tra-cuu/lich-hoc-tuan.html?k="
        },
        {
            "sc": "ntt",
            "name": "Trường Đại học Nguyễn Tất Thành",
            "tc": "https://phongdaotao.ntt.edu.vn/tra-cuu-thong-tin.html",
            "urlChuan": "https://phongdaotao.ntt.edu.vn/tra-cuu/lich-hoc-tuan.html?k="
        }
    ];

    const $ = document;

    var onChangeSchool = () =>{
        let scIndex = sltSchool.value
        if (scIndex == -1 || !schoolInformation[scIndex]) {
            txtKLichHoc.disabled = true;
            btnSubmit.disabled = false;
            formInputUrl.classList.add("d-none");
            lblTrangTraCuu.classList.add("d-none");
            return;
        }

        formInputUrl.classList.remove("d-none");
        lblTrangTraCuu.classList.remove("d-none");
        
        txtKLichHoc.disabled = false;
        btnSubmit.disabled = false;

        lblUrl.href = schoolInformation[scIndex].tc;
        lblKLichHoc.innerText = schoolInformation[scIndex].urlChuan;

    }


    var loadingSubmit = (e) => {
        if (e == true){
            btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
            btnSubmit.disabled = true;
        }else{
            btnSubmit.innerHTML = "Tạo lịch"
            btnSubmit.disabled = false;
        }
    }

    const getHostname = (url) => {
        // use URL constructor and return hostname
        return new URL(url).hostname;
    }

    var onSubmitFrmLicHoc = (e) => {
        e.preventDefault();

        loadingSubmit(true);
        
        getSchendar();

    }

    var showErrorDialog = (msg) => {
        errMsg.innerHTML = "<div>Dự án Schendar đã bị khai tử kể từ ngày 15/03/2026, bạn sẽ không thể tạo lịch hoặc sử dụng dự án này nữa.<br>Thông tin chi tiết: <a href="https://www.facebook.com/iuhCalendar/posts/pfbid02jSLz91W9R6nRJ7VybLW8L19YrV9EqmWtc2GNHLLwVDocHYqHWeZNwuTCYwN3hyVul" target="_blank">Xem tại đây</a></div>";
        alertMsg.classList.add("show");
        alertMsg.classList.remove("d-none");
		lblTrangTraCuu.classList.toggle("text-danger", true)
		lblTrangTraCuu.classList.toggle("fs-4", true)
		lblTrangTraCuu.classList.toggle("fw-bold", true)
        loadingSubmit(false);
    }


    var getSchendar = async () => {
		showErrorDialog("This project is End of Life | Dự án này đã dừng hỗ trợ");
	}
    
const getNotiVer = () => {
    return $.getElementById("modalThongTin").getAttribute("notiVer");
}

window.onload = () => {
    
        modalShowLich = new bootstrap.Modal(document.getElementById('modalShowLich'), {
            keyboard: false
        })

        modalThongTin = new bootstrap.Modal(document.getElementById('modalThongTin'), {
            keyboard: false
        })

        lblTrangTraCuu = $.getElementById("lblTrangTraCuu");
        errMsg = $.getElementById("errMsg");
        alertMsg = $.getElementById("alertMsg");

        formInputUrl = $.getElementById("formInputUrl");

        sltSchool = $.getElementById("sltSchool");
        sltSchool.onchange = onChangeSchool;

        txtKLichHoc = $.getElementById("txtKLichHoc");

        lblUrl = $.getElementById("lblUrl");
        lblKLichHoc = $.getElementById("lblKLichHoc");

        btnSubmit = $.getElementById("btnSubmit");

        frmGetLichHoc = $.getElementById("frmGetLichHoc");

        frmGetLichHoc.onsubmit = onSubmitFrmLicHoc;

        btnLichHocCopy = $.getElementById("btnLichHocCopy");
        btnLichHocCopy.onclick = () => {
            copyURL($.getElementById("urlLichHoc"));
        }

        btnLichThiCopy = $.getElementById("btnLichThiCopy");
        btnLichThiCopy.onclick = () => {
            copyURL($.getElementById("urlLichThi"));
        }

        btnLichHocThiCopy = $.getElementById("btnLichHocThiCopy");
        btnLichHocThiCopy.onclick = () => {
            copyURL($.getElementById("urlLichHocThi"));
        }

	btnLichHocAdd = $.getElementById("btnLichHocAdd");
        btnLichHocAdd.onclick = () => {
            addLich($.getElementById("urlLichHoc"));
        }

        btnLichThiAdd = $.getElementById("btnLichThiAdd");
        btnLichThiAdd.onclick = () => {
            addLich($.getElementById("urlLichThi"));
        }

        btnLichHocThiAdd = $.getElementById("btnLichHocThiAdd");
        btnLichHocThiAdd.onclick = () => {
            addLich($.getElementById("urlLichHocThi"));
        }

        
        if (!localStorage.getItem("notiVer") || localStorage.getItem("notiVer").toLowerCase() != getNotiVer().toLowerCase()) {
            modalThongTin.show();
            localStorage.setItem("notiVer", getNotiVer());
        }

       
    }
