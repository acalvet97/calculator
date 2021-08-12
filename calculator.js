var displayContent;
var numero;
var oper;
var valor1;
var valor2;
var resultado;

$('button.num').on('click', function(e){
    numero = $(e.target).text();
    displayContent = $('.screen').text();
    if ((displayContent == 0) || (displayContent == oper) || (displayContent == resultado)) {
        $('.screen').html('<p>' + numero + '</p>');
    } else {
        $('.screen').html('<p>'+ displayContent + numero + '</p>');
    };
});

$('button.op').on('click',function(e){
    oper = $(e.target).text();
    displayContent = $('.screen').text();
    
    valor1 = parseFloat(displayContent);
    $('.screen').html('<p>'+oper+'</p>');
});

$('button.clear').on('click', function(){
    $('.screen').html('<p>0</p>');
});

$('button.equal').on('click', result);
    /*displayContent = $('.screen').text();

    if (oper == $('button.mas').text()){
        resultado = valor1 + (parseFloat(displayContent));
        $('.screen').html('<p>'+(resultado)+'</p>');
    } else if (oper == $('button.menos').text()){
        resultado = valor1 - (parseFloat(displayContent));
        $('.screen').html('<p>'+(resultado)+'</p>');
    } else if (oper == $('button.multi').text()){
        resultado = valor1 * (parseFloat(displayContent));
        $('.screen').html('<p>'+(resultado)+'</p>');
    } else {
        resultado = valor1 / (parseFloat(displayContent));
        $('.screen').html('<p>'+(resultado)+'</p>');
    };
    console.log($.isNumeric(resultado));
});*/

function result(){
        displayContent = $('.screen').text();
    
        if (oper == $('button.mas').text()){
            resultado = valor1 + (parseFloat(displayContent));
            $('.screen').html('<p>'+(resultado)+'</p>');
        } else if (oper == $('button.menos').text()){
            resultado = valor1 - (parseFloat(displayContent));
            $('.screen').html('<p>'+(resultado)+'</p>');
        } else if (oper == $('button.multi').text()){
            resultado = valor1 * (parseFloat(displayContent));
            $('.screen').html('<p>'+(resultado)+'</p>');
        } else {
            resultado = valor1 / (parseFloat(displayContent));
            $('.screen').html('<p>'+(resultado)+'</p>');
        };
        console.log($.isNumeric(resultado));
};