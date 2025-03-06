import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Sidebar } from "@/components/dashboard/sidebar";
import Dashboard from "@/pages/dashboard";
import SearchPage from "@/pages/search";
import ListsPage from "@/pages/lists";
import InboxPage from "@/pages/inbox";
import OutreachPage from "@/pages/outreach";
import ReportsPage from "@/pages/reports";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-background">
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/search" component={SearchPage} />
          <Route path="/lists" component={ListsPage} />
          <Route path="/inbox" component={InboxPage} />
          <Route path="/outreach" component={OutreachPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}