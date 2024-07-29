import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Patients from "./pages/patients";
import { Normalize } from "./components/style/normalize";
import { SiteHeader } from "./components/site-header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Patient = lazy(() => import("./pages/patient"));

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager
        shouldForwardProp={(propName, element) =>
          typeof element === "string" ? isPropValid(propName) : true
        }
      >
        <Normalize />
        <Suspense fallback="Loading...">
          <Router>
            <SiteHeader />
            <Switch>
              <Route path="/patient/:id">
                <Patient />
              </Route>
              <Route path="/">
                <Patients />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </StyleSheetManager>
    </QueryClientProvider>
  );
}

export default App;
