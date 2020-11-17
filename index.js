 sub.onclick = function () {
    function checkAcct() {
        var oAcct = document.getElementById("acct").value;
        var re = /^[A-Za-z0-9]{4,15}$/;
        if (!oAcct || !re.test(oAcct)) {
            document.getElementById("acctYes").style.display = "none";
            document.getElementById("acctNo").style.display = "inline";
            alert("帳號欄有誤");
            return false;
        } else {
            document.getElementById("acctYes").style.display = "inline";
            document.getElementById("acctNo").style.display = "none";
            return true;
        }
    }
    function checkPwd() {
        var oPwd = document.getElementById("pwd").value;
        var re = /^[A-Za-z0-9]{6,12}$/;
        var re1 = /^([A-Za-z0-9])(?=.*[A-Z]).{6,12}$/;
        if (!oPwd || !re.test(oPwd)) {
            document.getElementById("pwdYes").style.display = "none";
            document.getElementById("pwdNo1").style.display = "inline";
            document.getElementById("pwdNo2").style.display = "none";
            alert("密碼欄有誤");
            return false;
        } else if (!re1.test(oPwd)) {
            document.getElementById("pwdYes").style.display = "none";
            document.getElementById("pwdNo1").style.display = "none";
            document.getElementById("pwdNo2").style.display = "inline";
            alert("密碼欄有誤");
            return false;
        } else {
            document.getElementById("pwdYes").style.display = "inline";
            document.getElementById("pwdNo1").style.display = "none";
            document.getElementById("pwdNo2").style.display = "none";
            return true;
        }
    }
    function checkAgain() {
        var oPwd = document.getElementById("pwd").value;
        var oAgain = document.getElementById("again").value;
        if (!oAgain || oAgain !== oPwd) {
            document.getElementById("againYes").style.display = "none";
            document.getElementById("againNo").style.display = "inline";
            alert("確認密碼欄有誤");
            return false;
        } else {
            document.getElementById("againYes").style.display = "inline";
            document.getElementById("againNo").style.display = "none";
            return true;
        }
    }
    function checkName() {
        var oName = document.getElementById("name").value;
        var re = /./;
        var re1 = /[\『\{\}\[\]\"\』]/;
        if (!oName || !re.test(oName)) {
            document.getElementById("nameYes").style.display = "none";
            document.getElementById("nameNo1").style.display = "inline";
            document.getElementById("nameNo2").style.display = "none";
            alert("暱稱欄有誤");
            return false;
        } else if (re1.test(oName)) {
            document.getElementById("nameYes").style.display = "none";
            document.getElementById("nameNo1").style.display = "none";
            document.getElementById("nameNo2").style.display = "inline";
            alert("暱稱欄有誤");
            return false;
        } else {
            document.getElementById("nameYes").style.display = "inline";
            document.getElementById("nameNo1").style.display = "none";
            document.getElementById("nameNo2").style.display = "none";
            return true;
        }
    }
    function checkUser() {
        var oUser = document.getElementById("user").value;
        var re = /^[\u4e00-\u9fa5a-zA-Z]+$/;
        var re1 = /^[\u4e00-\u9fa5a-zA-Z]{1,6}$/;
        if (!oUser || !re.test(oUser)) {
            document.getElementById("userYes").style.display = "none";
            document.getElementById("userNo").style.display = "inline";
            document.getElementById("userNo1").style.display = "none";
            alert("真實姓名欄有誤");
            return false;
        } else if (!re1.test(oUser)) {
            document.getElementById("userYes").style.display = "none";
            document.getElementById("userNo").style.display = "none";
            document.getElementById("userNo1").style.display = "inline";
            alert("真實姓名欄有誤");
            return false;
        } else {
            document.getElementById("userYes").style.display = "inline";
            document.getElementById("userNo").style.display = "none";
            document.getElementById("userNo1").style.display = "none";
            return true;
        }
    }
    function checkEng() {
        var oEng = document.getElementById("eng").value;
        var re = /^[A-Za-z]+['_\s]*[A-Za-z]+$/;
        if (!oEng || !re.test(oEng)) {
            document.getElementById("engYes").style.display = "none";
            document.getElementById("engNo").style.display = "inline";
            alert("英文名子欄有誤");
            return false;
        } else {
            document.getElementById("engYes").style.display = "inline";
            document.getElementById("engNo").style.display = "none";
            return true;
        }
  }
    function checkBir() {
        var oBir = document.getElementById("bir").value;
        var re = /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/;
        if (!oBir || !re.test(oBir)) {
            document.getElementById("birYes").style.display = "none";
            document.getElementById("birNo").style.display = "inline";
            alert("生日欄有誤");
            return false;
        } else {
            document.getElementById("birYes").style.display = "inline";
            document.getElementById("birNo").style.display = "none";
            return true;
        }
    }
    function checkCity() {
        var oCity = document.getElementById("city").value;
        var re = /^[a-zA-Z0-9\s*\u4E00-\u9FFF]+$/;
        if (!oCity || !re.test(oCity)) {
            document.getElementById("cityYes").style.display = "none";
            document.getElementById("cityNo").style.display = "inline";
            alert("國家欄有誤");
            return false;
        } else {
            document.getElementById("cityYes").style.display = "inline";
            document.getElementById("cityNo").style.display = "none";
            return true;
        }
    }
    function checkCert() {
        var oCert = document.getElementById("cert").value;
        var re = /^[a-zA-Z0-9_]*$/;
        if (!oCert || !re.test(oCert)) {
            document.getElementById("certYes").style.display = "none";
            document.getElementById("certNo").style.display = "inline";
            alert("證件欄有誤");
            return false;
        } else {
            document.getElementById("certYes").style.display = "inline";
            document.getElementById("certNo").style.display = "none";
            return true;
        }
    }
    function checkPhone() {
        var oPhone = document.getElementById("phone").value;
        var re = /(^09[0-9]{8}$)|(^\+886+[\s]+[9]{1}[0-9]{8}$)/;
        if (!oPhone || !re.test(oPhone)) {
            document.getElementById("phoneYes").style.display = "none";
            document.getElementById("phoneNo").style.display = "inline";
            alert("電話欄有誤");
            return false;
        } else {
            document.getElementById("phoneYes").style.display = "inline";
            document.getElementById("phoneNo").style.display = "none";
            return true;
        }
    }
    var c1 = checkAcct();
    var c2 = checkPwd();
    var c3 = checkAgain();
    var c4 = checkName();
    var c5 = checkUser();
    var c6 = checkEng();
    var c7 = checkBir();
    var c8 = checkCity();
    var c9 = checkCert();
    var c10 = checkPhone();
    if (
        c1 == true &&
        c2 == true &&
        c3 == true &&
        c4 == true &&
        c5 == true &&
        c6 == true &&
        c7 == true &&
        c8 == true &&
        c9 == true &&
        c10 == true
    ) {
        alert("成功");
    } else {
        return false;
    }
};
