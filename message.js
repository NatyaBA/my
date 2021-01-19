function testCont(){
    if( form1.FIO.value == "" ){
        form1.FIO.select();
        alert("Введите Имя");
        return false;
    }

    if( form1.EMail.value == "" ){
        form1.EMail.select();
        alert("Введите E-mail");
        return false;
    }

    if( form1.Title.value == "" ){
        form1.Title.select();
        alert("Введите сообщение");
        return false;
    }

    return true;
}
