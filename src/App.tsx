import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import GlobalStyle from "./style/GlobalStyle"
// import { BrowserRouter as Router } from "react-router-dom"; 
// import WritingEventSchedulePage from "./pages/Pages/WritingEventSchedulePage";
import WorkReportPage from "./pages/Pages/WorkReportPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
{/* <WritingEventSchedulePage/> */}
<WorkReportPage/>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
