// ดึง element ของช่องแสดงผลลัพธ์
const resultDisplay = document.getElementById('result');

// ฟังก์ชันสำหรับแสดงค่าที่กดบนหน้าจอ
function appendInput(value) {
    resultDisplay.value += value;
}

// ฟังก์ชันสำหรับล้างค่าทั้งหมด
function clearResult() {
    resultDisplay.value = '';
}

// ฟังก์ชันสำหรับคำนวณผลลัพธ์
function calculate() {
    try {
        // ใช้ eval() เพื่อคำนวณนิพจน์ทางคณิตศาสตร์
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการคำนวณ (เช่น ใส่เครื่องหมายผิด)
        resultDisplay.value = 'Error';
    }
}