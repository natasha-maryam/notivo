import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Search from "./pages/Search";
import Notes from "./pages/Notes";
import People from "./pages/People";
import Tags from "./pages/Tags";
import Workspaces from "./pages/Workspaces";
import CreateWorkspace from "./pages/CreateWorkspace";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Dashboard Routes */}
  
      <Route path="/search" element={
        <DashboardLayout>
          <Search />
        </DashboardLayout>
      } />
      <Route path="/notes" element={
        <DashboardLayout>
          <Notes />
        </DashboardLayout>
      } />
      <Route path="/people" element={
        <DashboardLayout>
          <People />
        </DashboardLayout>
      } />
      <Route path="/tags" element={
        <DashboardLayout>
          <Tags />
        </DashboardLayout>
      } />
      <Route path="/workspaces" element={
        <DashboardLayout>
          <Workspaces />
        </DashboardLayout>
      } />
      <Route path="/workspaces/new" element={
        <DashboardLayout>
          <CreateWorkspace />
        </DashboardLayout>
      } />
      <Route path="/reports" element={
        <DashboardLayout>
          <Reports />
        </DashboardLayout>
      } />
      <Route path="/settings" element={
        <DashboardLayout>
          <Settings />
        </DashboardLayout>
      } />
    </Routes>
  );
}
