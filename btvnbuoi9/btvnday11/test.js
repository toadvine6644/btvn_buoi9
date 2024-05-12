const h1Element = document.querySelector('.titleH1');
const btnClick = document.querySelector('.btnClick');

let isChanged = false; // Biến để lưu trạng thái (true: đã thay đổi, false: trạng thái ban đầu)

btnClick.addEventListener('click', function() {
    if (isChanged) {
        // Reset về trạng thái ban đầu
        h1Element.textContent = 'This is content';
        h1Element.style.color = '';
        h1Element.style.backgroundColor = '';
        isChanged = false;
        btnClick.textContent = 'Click';
    } else {
        // Thay đổi thẻ h1
        h1Element.textContent = 'Đây là nội dung';
        h1Element.style.color = 'red';
        h1Element.style.backgroundColor = 'blue';
        isChanged = true;
        btnClick.textContent = 'Reset';
    }
});
