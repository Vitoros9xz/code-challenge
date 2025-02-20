import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Màu chủ đạo xanh lá cây
    },
    secondary: {
      main: '#FF9800', // Màu phụ cam
    },
    background: {
      default: '#F5F5F5', // Màu nền nhạt
    },
    text: {
      primary: '#000000', // Màu văn bản chính
      secondary: '#757575', // Màu văn bản phụ
    },
  },
  typography: {
    fontFamily: [
      'Be Vietnam Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    // Cấu hình cho MuiButton
    MuiButton: {
      defaultProps: {
        // Các prop mặc định cho Button
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#FF9800', // Màu cam cho nút
          '&:hover': {
            backgroundColor: '#FFA726', // Màu cam đậm hơn khi hover
          },
        },
      },
    },
    // Cấu hình cho MuiTextField
    MuiTextField: {
      defaultProps: {
        // Các prop mặc định cho TextField
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#BDBDBD', // Màu viền mặc định
            },
            '&:hover fieldset': {
              borderColor: '#4CAF50', // Màu viền khi hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4CAF50', // Màu viền khi focus
            },
          },
        },
      },
    },
    // Cấu hình cho MuiInputAdornment
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#FF9800', // Màu cho biểu tượng tiền tệ
        },
      },
    },
  },
});

export default theme;