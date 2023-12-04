import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./style/GloblaStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
