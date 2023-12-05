import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./style/GloblaStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import Router from "./Router";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
