// دالة لفحص الإجابة
function checkAnswer() {
    // الإجابة الصحيحة
    const correctAnswer = "4";
    
    // الحصول على الإجابة المختارة من المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // تحديد العنصر الخاص بعرض التغذية الراجعة
    const feedbackElement = document.getElementById('feedback');
    
    // مقارنة الإجابة المختارة بالإجابة الصحيحة
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// إضافة مستمع للأحداث لزر إرسال الإجابة
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
