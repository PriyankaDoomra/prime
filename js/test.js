var answer = ['1-d', '2-c', '3-c', '4-c', '5-a'];

function check() {
    var ans = [];
    var j = 0;
    var result = [];
    const radio = document.getElementsByName('ans');
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            ans[j++] = radio[i].value;
        }
    }
    j = 0;
    var score = 0;
    if (ans.length !== 5) {
        alert('Please mark all answers');
    } else {
        for (i = 0; i < answer.length; i++) {
            if (answer[i] === ans[i]) {
                score++;
                result[j++] = 'Correct';
            } else {
                result[j++] = 'Incorrect';
            }
        }
        alert(`Your score is ${score}/5`);
        for (i = 0; i < result.length; i++) {
            if (result[i] === 'Correct') {
                document.getElementById(`result-${i + 1}`).innerHTML =
                    'Correct';
                document.getElementById(`result-${i + 1}`).style.color =
                    'green';
            } else {
                document.getElementById(
                    `result-${i + 1}`
                ).innerHTML = `Incorrect <br> Answer - ${
                    answer[i].split('-')[1]
                }`;
                document.getElementById(`result-${i + 1}`).style.color = 'red';
            }
        }
    }
}
