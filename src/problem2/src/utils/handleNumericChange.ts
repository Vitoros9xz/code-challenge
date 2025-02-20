import { formatNumber } from "./formatNumber";

export const handleNumericChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (...event: unknown[]) => void) => {
  const input = event.target;
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;

  const inputValue = event.target.value;
  let numericValue = inputValue.replace(/[^0-9.]/g, '').replace(/^0+/, '');
  if (numericValue === '') numericValue = '0'; // Đảm bảo rằng nếu sau khi loại bỏ 0 không còn gì, giá trị sẽ là '0'
  
  // Chỉ cho phép một dấu chấm
  const dotCount = (numericValue.match(/\./g) || []).length;
  if (dotCount > 1) {
    return;
  }
  
  const formattedValue = formatNumber(numericValue);
  
  // Cập nhật giá trị và giữ vị trí con trỏ
  onChange(formattedValue);
  
  // Sử dụng setTimeout để đảm bảo rằng DOM đã được cập nhật trước khi thay đổi vị trí con trỏ
  setTimeout(() => {
    if (selectionStart !== null && selectionEnd !== null) {
      // Tính toán lại vị trí con trỏ dựa trên sự thay đổi của giá trị
      const newValueLength = formattedValue.length;
      const oldValueLength = inputValue.length;
      let newCursorPosition = selectionStart + (newValueLength - oldValueLength);
      
      // Đảm bảo vị trí con trỏ không vượt quá độ dài của giá trị mới
      if (newCursorPosition > newValueLength) {
        newCursorPosition = newValueLength;
      }
      
      input.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }, 0);
};