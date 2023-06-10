<!--

//png 이미지 스크립트
function setPng24(obj) {
obj.width=obj.height=1;
obj.className=obj.className.replace(/\bpng24\b/i,'');
obj.style.filter =
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
obj.src='about:blank;';
return '';
}

function callme(image) {
img.filters[0].Apply();
img.src=image;
img.filters[0].Play();
}


var statusForm = false;
///탭스 업로드 진행사항
	function Startupload() {
		window.showModelessDialog("/include/progressbar.asp?progressid=<%=ProgressID%>", null, "help=no;dialogWidth=500px; dialogHeight:140px; center:yes");
	}



function login_f_ok()
{
	var f = document.login_f

	if (statusForm)
	{
		return;
	}

	var c = 0;
	var b = 0;
	var msg = "";
	msg += "아래의 정보가 기입누락 되었습니다.\n";
	msg += "------------------------------------\n";

	if (f.M_ID.value == "")
	{
		msg += "ID\n";c=1;
	}
	if (f.M_Password.value == "")
	{
		msg += "비밀번호\n";c=1;
	}
	if (c==1)
	{
		b=1;
	}
	if (b != 0)
	{
		alert(msg);
		return;
	}

	var c1 = 0;
	var b1 = 0;
	var msg1 = " 잘못 입력한것이 있습니다\n";
	msg1 += "------------------------------------\n";

	var  id_check = "";
	var temp6 = "";
	id_check = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for ( var i = 0 ; i < f.M_ID.value.length ; i++ ) {
		temp6 = f.M_ID.value.substring(i, i+1);
		if ( id_check.indexOf(temp6) == -1 ) {
			msg1 += "아이디에 숫자와 영문자외에는 사용하실수 없습니다\n";c1=1;
		}
	}

	var  pwd_check = "";
	var temp5 = "";
	pwd_check = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for ( var i = 0 ; i < f.M_Password.value.length ; i++ ) {
		temp5 = f.M_Password.value.substring(i, i+1);
		if ( pwd_check.indexOf(temp5) == -1 ) {
			msg1 += "비밀번호에 숫자와 영문자외에는 사용하실수 없습니다\n";c1=1;
		}
	}

	if (c1 == 1)
	{
		b1=1;
	}
	if (b1 != 0)
	{
		alert(msg1);
		return;
	}

	statusForm = true;

	f.action = "/member/index.asp?p_url=log_in_ok"

	f.submit();
}
//061008 메뉴 함수
function top_memu(str1,str2)
{
	//alert("str1=>" + str1);
	//alert("str2=>" + str2);
	for (i=0 ;i<=t_menu.length-1 ;i++)
	{
		if (i==str1)
		{
			t_menu[i].style.display='';
			td_menu.style.padding='0 0 0 '+str2+'';
		}
		else
		{
			t_menu[i].style.display='none';
		}
	}
}

function geogameC(view)
{
	document.geogameF.view.value=view;
	geogame=window.open('','geogame','toolbar=no,resizable=no,scrollbars=yes,status=no,width=817,height=600');
	document.geogameF.submit();
}

function start_home()
{
	this.style.behavior='url(#default#homepage)';this.setHomePage('http://cammeting.co.kr');
}
function c_go(url, alert)
{
	if(confirm(alert))
	{
		document.location.href = url;
	}

}
function n_id()
{
	if( confirm("로그인 또는 회원가입이 필요합니다.\n계속하시겠습니까?") ) {
		document.location.href = '/member/?p_url=log_in';
	}
}

function n_sv()
{
	alert('죄송 합니다 준비중입니다.\n곧 업데이트 됩니다.');
}

function n_j_member()
{
	if( confirm("준회원 이상 이용이 가능합니다.\n준회원으로 가입 하시겠습니까?") ) {
		document.location.href = '/member/?p_url=s_join';
	}
	else return;
}



function n_s_member()
{
	if( confirm("정회원 이상 이용이 가능합니다.\n정회원으로 가입 하시겠습니까?") ) {
		document.location.href = '/member/?p_url=s_join';
	}
	else return;
}

function n_s_member_h(str)
{
	var ksy
	ksy = confirm("정회원 이상 무료 이용이 가능합니다\n정회원이 아닌 회원님께서는\ne-머니 200원 결제로 이용하실수 있습니다\ne-머니로 결제 하시겠습니까?")
	if (ksy == true )
	{
		home(str)
	}
	else
	{
		return;
	}
}



function n_s_member_m(str)
{
	var ksy
	ksy = confirm("정회원 이상 무료 이용이 가능합니다\n정회원이 아닌 회원님께서는\ne-머니 100원 결제로 이용하실수 있습니다\ne-머니로 결제 하시겠습니까?")
	if (ksy == true )
	{
		memo(str)
	}
	else
	{
		return;
	}
}

function d_id()
{
	alert('동성간에는 이용하실 수 없습니다.');
}

function j_id()
{
	alert('자신에게는 이용하실 수 없습니다.');
}
function w_id() {
	alert('여성만 이용하실수 있습니다.');
}

function check_level(opt) {
	var chk = 0;

	switch(opt) {
		case 1 :
			msg = "준회원 이상 이용이 가능합니다.\n준회원으로 가입 하시겠습니까?";
			break;

		case 2 :
			msg = "정회원 이상 이용이 가능합니다.\n정회원으로 가입 하시겠습니까?";
			break;

		case 3 :
			msg = "정회원 이상 이용이 가능합니다.\n정회원으로 가입 하시겠습니까?";
			break;

		case 4 :
			msg = "잘못된 접근입니다.";
			chk = 1;
			break;

		case 7 :
			msg = "우수회원 이상 이용이 가능합니다.\n우수회원으로 가입 하시겠습니까?";
			break;

		default :
			msg = "준회원 이상 이용이 가능합니다.\n준회원으로 가입 하시겠습니까?";
			break;
	}

	if(chk == 1) {
		document.location.href = '/index.asp';
	}
	else if( confirm(msg) ) {
		document.location.href = '/member/?p_url=s_join';
	}
	else return;
}
function map_ok() {
    window.open('/include/sitemap.asp','','left=0,top=0,width=776,height=450');
}
function p_woman()
{
	window.open('/popup/woman.asp','', 'width=300, height=420, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function pop_ok() {
    window.open('/c_notice/?','','left=70,top=70,width=620,height=450,scrollbars=1');
}
function msg_edit_ok(re_m_id) {
    window.open('/my_home/home/edit.asp?M_ID='+re_m_id,'','left=100,top=100,width=250,height=200');
}

function msg_edit_ok2(re_m_id) {
    window.open('/my_home/home/title_edit.asp?M_ID='+re_m_id,'','left=100,top=100,width=510,height=400');
}
function album_edit_title(re_m_id) {
    window.open('/my_home/album/title_edit.asp?M_ID='+re_m_id,'','left=100,top=100,width=510,height=180');
}
function gido_ok() {
    window.open('/c_gido/edit.asp','','left=100,top=100,width=510,height=200');
}
function mag_down() {
    window.open('/include/mass.asp','','left=100,top=100,width=450,height=200');
}

//메인 게시판 함수
function today_pop(str)
{
	window.open('/c_main/?p_url='+str,'main_board','left=70,top=70,width=800,height=550,scrollbars=1');
}
////////////////////////
function main_banner_03()
{
	window.open('/c_church/?','','left=100,top=100,width=620,height=450,scrollbars=1');
}
function main_banner_04()
{
	window.open('/c_gido/?','gido','left=100,top=100,width=620,height=450,scrollbars=1');
}

function home(str)
{
	window.open('/my_home?M_ID='+str,'edit_ok', 'width=950, height=591, left=50, top=50, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}


function album(str)
{
	pop_photo(str,'1')
}

function memo(str)
{
	send_memo(str)
}

function chat(str)
{
	req_one2one(str,str)
}


function reg_frd(str,no)
{
	window.open('/my_frd?M_ID='+str+'&state='+no,'my_frd', 'width=450, height=420, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function c_center(str)
{
	window.open('/c_center/'+str,'call', 'width=550, height=440, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}

function call(str)
{
	window.open('/c_callclub/t_host/res.asp?re_id='+str,'call', 'width=455, height=475, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}

function cam()
{
	window.open('/c_camclub/Web-Files/login.asp', 'cam', 'width=636, height=436, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}

function m_c()
{
	window.open('/member/mc.asp', 'mc', 'width=417, height=455, left=100, top=100, toolbar=no, location=no, directories=no, status=yes, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}

function g_c(str)
{
	window.open('/member/gc.asp?g_id='+str, 'gc', 'width=636, height=436, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}

function pop_photo(str1,str2)
{
	window.open('/my_home/album/pop_update.asp?re_id='+str1+'&page='+str2, 'p_photo', 'width=876, height=640, left=40, top=0, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no,copyhistory=no')
}
//앨범 테스트용
function pop_photo_up(str1,str2)
{
	window.open('/my_home/album/pop_update.asp?re_id='+str1+'&page='+str2, 'p_photo', 'width=876, height=640, left=40, top=0, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no,copyhistory=no')
}

function is_b_img(str1)
{
	window.open('/c_mbuy/b_img.asp?p_id='+str1, 'b_img', 'width=500, height=500, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function is_b_img_gongu(str1)
{
	window.open('/c_mbuy_new/b_img.asp?p_id='+str1, 'b_img', 'width=500, height=500, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function order_p_shop(str1)
{
	window.open('/c_mbuy/order_p.asp?OID='+str1, 'b_img', 'width=500, height=515, left=100, top=100, toolbar=no, location=no, directories=no, status=yes, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function order_p(str1)
{
	window.open('/c_mbuy_new/order_p.asp?OID='+str1, 'b_img', 'width=500, height=515, left=100, top=100, toolbar=no, location=no, directories=no, status=yes, menubar=no, resizable=no, scrollbars=no, copyhistory=no')
}
function op_notice(f)
{
	window.open('/popup/notice.asp?list_no='+f,'notice','width=400, height=500, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no');
}

function op_shop_notice(f)
{
	window.open('/popup/shop_notice.asp?list_no='+f,'notice','width=400, height=500, left=100, top=100, toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no');
}
function getSelectedText(select) {
// 선택된 Option값을 ','를 포함하여 보냄
	var retValue = "" ;
	for (var i = 0; i < select.options.length; i++) {
		if (select.options[i].selected) {
			if (retValue=="") {
				retValue = select.options[i].text }
			else {
				retValue = retValue + ", " + select.options[i].text }
		}
	}
	return retValue ;
}
function getSelectedValues(select) {
// 선택된 Option값을 ','를 포함하여 보냄
	var retValue = "" ;
	for (var i = 0; i < select.options.length; i++) {
		if (select.options[i].selected) {
			if (retValue=="") {
				retValue = select.options[i].value }
			else {
				retValue = retValue + ", " + select.options[i].value }
		}
	}
	return retValue ;
}
function up_item(obj) {
	obj.value = parseInt(obj.value) + 1;
	if(obj.value < 1) obj.value = 1;
}
function down_item(obj) {
	if(parseInt(obj.value) > 1) obj.value = parseInt(obj.value) - 1;
	//if(obj.value < 1) obj.value = 1;
}

function numbersonly(e, decimal)
{
	var key;
	var keychar;

	if (window.event) {
	// IE에서 이벤트를 확인하기 위한 설정
		key = window.event.keyCode;
	} else if (e) {
	// FireFox에서 이벤트를 확인하기 위한 설정
		key = e.which;
	} else {
		return true;
	}

	keychar = String.fromCharCode(key);
	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
		return true;
	} else if ((("0123456789").indexOf(keychar) > -1)) {
		return true;
	} else if (decimal && (keychar == ".")) {
	return true;
	} else
	return false;
}
// -->