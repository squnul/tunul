
function startChecking() {
    const token = document.getElementById("token").value;
    const chatId = document.getElementById("chat_id").value;
    const resultDiv = document.getElementById("results");

    if (!token || !chatId) {
        alert("يرجى إدخال التوكن والآيدي");
        return;
    }

    // عرض نتيجة وهمية
    const card = document.createElement("div");
    card.className = "result-card success";
    card.innerText = "✅ بطاقة صالحة - تم الإرسال إلى تليجرام";
    resultDiv.appendChild(card);
}
