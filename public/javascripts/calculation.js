

function checkValid()
{
    if(checkIsN()===1 || btnIsSelected()===0 || isNotValidCal()===1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function checkIsN()
{
    b = document.getElementById('4');
    let x = document.getElementById('1');
    let y = document.getElementById('2');
    fst = 0;
    fnd = 0;
    flag = 0;

    if(isNaN(x.value))
    {
        b.innerHTML = "Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số";
        fst = 1;
        flag = 1;
    }
    if(isNaN(y.value))
    {
        b.innerHTML = "Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số";
        fnd = 1;
        flag = 1;
    }

    if(fst === 1 && fnd === 1)
    {
        b.innerHTML = "Chưa điền đủ 2 số hợp lệ để thực hiện phép tính";
    }

    if(checkIsEmpty())
    {
        flag = 1;
    }
    return flag;
}

function checkIsEmpty()
{
    let x = document.getElementById('1');
    let y = document.getElementById('2');
    if((!x.value || x.length === 0) && (!y.value || y.length === 0))
    {   
        b.value = "";
        return true;
    }
    else
    {
        return false;
    }
}

function btnIsSelected()
{
    if(document.getElementById('Cộng').checked)
    {
        return 1;
    }
    if(document.getElementById('Trừ').checked)
    {
        return 1;
    }
    if(document.getElementById('Nhân').checked)
    {
        return 1;
    }
    if(document.getElementById('Chia').checked)
    {
        return 1;
    }
    b.value = "Bạn chưa chọn phép tính";
    return 0;
}

function isNotValidCal()
{
    let a = document.getElementById('2');
    if(document.getElementById('Chia').checked)
    {
        a = parseFloat(a.value);
        if(a===0)
        {
            b.innerHTML = "Không hợp lệ";
            return 1;
        }
    }
    return 0;
}