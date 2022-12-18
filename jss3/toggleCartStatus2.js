function toggleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');

    if(cartWrapper.children.length > 0){
        document.getElementById("pusto").style.display = "none";
        document.getElementById("order-form").style.display = "block";

    }else{
        document.getElementById("pusto").style.display = "block";
        document.getElementById("order-form").style.display = "none";

    }
}

$(function () {
    $("#btnSubmit").click(function () {
        var password = $("#emails").val();
        var confirmPassword = $("#confirm_emails").val();
        if (password != confirmPassword) {
            alert("Пожалуйста выводите почту еще раз");            
        }else{
            alert("Ваш заказ успешно оформлен.Мы отправили вам на почту все детали заказа:)"); 
        }

    });
});