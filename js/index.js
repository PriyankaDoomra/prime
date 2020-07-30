var array = [];
var n;
function generateNumbers() {
    var remove = document.querySelector('.remove');
    if (remove) remove.parentNode.removeChild(remove);
    n = document.getElementById('value').value * 1;
    document.getElementById('search').disabled = true;
    for (var i = 1; i <= n; ++i) {
        var random = i;
        var newdiv = document.createElement('div');
        var indexdiv = document.createElement('div');

        array[i] = random;

        newdiv.style.width = '50px';
        newdiv.style.height = '50px';
        newdiv.style.border = '1px solid black';
        newdiv.style.textAlign = 'center';
        newdiv.style.color = 'black';
        newdiv.style.verticalAlign = 'middle';
        newdiv.style.lineHeight = '50px';
        newdiv.style.float = 'left';
        newdiv.style.margin = '1px';
        newdiv.innerHTML = array[i];
        newdiv.setAttribute('id', `value-${i}`);
        indexdiv.style.width = '50px';
        indexdiv.style.height = '50px';
        indexdiv.style.textAlign = 'center';
        indexdiv.style.color = 'black';
        indexdiv.style.verticalAlign = 'middle';
        indexdiv.style.lineHeight = '50px';
        indexdiv.style.float = 'left';
        indexdiv.style.margin = '1px';
        indexdiv.innerHTML = i;
        indexdiv.setAttribute('id', `index-${i}`);
        document.getElementById('visualizer').appendChild(newdiv);
        // document.getElementById('index').appendChild(indexdiv);
    }
}

function primeNumbers() {
    // var size = 2000;
    const radio = document.getElementsByName('options');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            size = radio[i].value * 1000;
        }
    }
    document.getElementById('start').disabled = true;
    for (var i = 1; i <= n; ++i) {
        document.getElementById(`value-${i}`).style.color = 'black';
        document.getElementById(`value-${i}`).style.borderColor = 'black';
        document.getElementById(`value-${i}`).style.borderWidth = '1px';
        document.getElementById(`value-${i}`).style.fontWeight = '400';
        document.getElementById('li-2').style.color = 'blue';
        document.getElementById('li-3').style.color = 'black';
        document.getElementById('li-4').style.color = 'black';
        document.getElementById('li-5').style.color = 'black';
        document.getElementById('li-6').style.color = 'black';
        document.getElementById('li-7').style.color = 'black';
        document.getElementById('li-8').style.color = 'black';
    }
    var timer;
    var l = 1;
    const t1 = setInterval(function () {
        if (l === 0) {
            document.getElementById('li-2').style.color = 'blue';
            document.getElementById('li-3').style.color = 'black';
            document.getElementById('li-4').style.color = 'black';
            document.getElementById('li-5').style.color = 'black';
            document.getElementById('li-6').style.color = 'black';
            document.getElementById('li-7').style.color = 'black';
            document.getElementById('li-8').style.color = 'black';
            l = 1;
        } else if (l === 1) {
            document.getElementById('li-2').style.color = 'black';
            document.getElementById('li-3').style.color = 'blue';
            document.getElementById('li-4').style.color = 'blue';
            document.getElementById('li-5').style.color = 'black';
            document.getElementById('li-6').style.color = 'black';
            document.getElementById('li-7').style.color = 'black';
            document.getElementById('li-8').style.color = 'black';
            l = 2;
        } else if (l === 2) {
            document.getElementById('li-2').style.color = 'black';
            document.getElementById('li-3').style.color = 'black';
            document.getElementById('li-4').style.color = 'black';
            document.getElementById('li-5').style.color = 'blue';
            document.getElementById('li-6').style.color = 'black';
            document.getElementById('li-7').style.color = 'black';
            document.getElementById('li-8').style.color = 'black';
            l = 0;
        }
    }, size / 3);

    for (var i = 1; i <= n; i++) {
        (function (i) {
            timer = window.setTimeout(function () {
                if (i === 1) {
                    document.getElementById(`value-${i}`).style.color = 'blue';
                    document.getElementById(`value-${i}`).style.borderColor =
                        'blue';
                    document.getElementById(`value-${i}`).style.borderWidth =
                        '3px';
                    document.getElementById('li-5').style.color = 'black';
                } else {
                    var color = document.getElementById(`value-${i - 1}`).style
                        .color;
                    var borderColor = document.getElementById(`value-${i - 1}`)
                        .style.borderColor;
                    if (color !== 'green' && borderColor !== 'green') {
                        document.getElementById(`value-${i - 1}`).style.color =
                            'black';
                        document.getElementById(
                            `value-${i - 1}`
                        ).style.borderColor = 'black';
                        document.getElementById(
                            `value-${i - 1}`
                        ).style.borderWidth = '1px';
                    }
                    document.getElementById(`value-${i}`).style.color = 'blue';
                    document.getElementById(`value-${i}`).style.borderColor =
                        'blue';
                    document.getElementById(`value-${i}`).style.borderWidth =
                        '3px';
                    document.getElementById('li-5').style.color = 'black';
                }
                var k = 0;
                if (i > 2) {
                    for (var j = 2; j < i; ++j) {
                        if (i % j === 0) {
                            setTimeout(function () {
                                document.getElementById('li-6').style.color =
                                    'red';
                            }, (2 * size) / 3);
                            k++;
                            break;
                        }
                    }
                    if (k === 0) {
                        document.getElementById(`value-${i}`).style.color =
                            'green';
                        document.getElementById(
                            `value-${i}`
                        ).style.borderWidth = '3px';
                        document.getElementById(`value-${i}`).style.fontWeight =
                            'bolder';
                        document.getElementById(
                            `value-${i}`
                        ).style.borderColor = 'green';
                        setTimeout(function () {
                            document.getElementById('li-7').style.color =
                                'green';
                            document.getElementById('li-8').style.color =
                                'green';
                        }, (2 * size) / 3);
                    }
                }
            }, (i - 1) * size);
        })(i);
        setTimeout(function () {
            document.getElementById('li-2').style.color = 'black';
            document.getElementById('start').disabled = false;
            clearInterval(t1);
        }, size * n);
    }
}
