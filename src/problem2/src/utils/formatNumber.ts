export const formatNumber = (value: string) => {
  // Loại bỏ các số 0 ở đầu nếu có
  let numericValue = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");
  if (numericValue === "") numericValue = "0"; // Đảm bảo rằng nếu sau khi loại bỏ 0 không còn gì, giá trị sẽ là '0'

  const parts = numericValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Giới hạn 3 chữ số thập phân
  if (parts[1] && parts[1].length > 3) {
    parts[1] = parts[1].slice(0, 3);
  }

  if (!parts[0]) parts[0] = "0";

  return parts.join(".");
};
