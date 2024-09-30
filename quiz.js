function checkAnswer() {
    // تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على إجابة المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // التأكد من أن المستخدم قام باختيار إجابة
    if (userAnswer) {
        const feedback = document.getElementById('feedback');

        // مقارنة الإجابة المختارة بالإجابة الصحيحة
        if (userAnswer.value == correctAnswer) {
            feedback.textContent = "إجابة صحيحة! أحسنت.";
        } else {
            feedback.textContent = "هذه إجابة خاطئة. حاول مرة أخرى!";
        }
    } else {
        alert("يرجى اختيار إجابة قبل إرسال!");
    }
}

// إضافة مستمع للأحداث لزر إرسال الإجابة
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
