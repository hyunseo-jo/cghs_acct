// static/script.js

document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 제출 막기

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const resultBox = document.getElementById("result");

  // 📌 예시 데이터: 실제로는 서버나 DB에서 가져와야 함
  const accounts = [
    { id: "202401", name: "김민지", email: "202401@school.edu", password: "abcd1234" },
    { id: "202402", name: "이준호", email: "202402@school.edu", password: "qwer5678" },
    { id: "202403", name: "박서연", email: "202403@school.edu", password: "zxcv9012" },
    { id: "202404", name: "박시연", email: "202404@school.edu", password: "zxcv9013" },
  ];

  // 입력값에 해당하는 학생 찾기
  const student = accounts.find(account => account.id === studentId && account.name === studentName);

  if (student) {
    resultBox.innerHTML = `
      <strong>🔐 계정 정보</strong><br>
      📧 <b>ID</b>: ${student.email}<br>
      🔑 <b>PW</b>: ${student.password}
    `;
    resultBox.style.display = "block";
  } else {
    resultBox.innerHTML = "⚠️ 해당 정보를 찾을 수 없습니다. 다시 확인해주세요.";
    resultBox.style.display = "block";
  }
});
