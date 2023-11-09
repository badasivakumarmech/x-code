import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Perfex-login";
import ForgotPassword from "./Forgetpassword";
import PerfexHome from "./PerfexHome";
import AdminDashboard from "./AdminDashboard";
import Admin from "./Practice";
import ShowData from "./ShowIcon";
import UsersDetails from "./UsersDetails";
import UpdatePage from "./UpdatePage";
import ShowData1 from "./ShowInstitutes";
import BatchYear from "./Batch-Year";
import Batches from "./Batches";
import UpdateYear from "./Batch-Year-Up";
import UpdateBatch from "./Batch-Update";
import SearchOption from "./SearchUser";

import Institute from "./Institute";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/PerfexHome" element={<PerfexHome />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/UsersDetails" element={<UsersDetails />} />
        <Route exact path="/ShowData/:id" element={<ShowData />} />
        <Route exact path="/UpdatePage/:id" element={<UpdatePage />} />
        <Route exact path="/ShowData1/:id" element={<ShowData1 />} />
        <Route exact path="/Institute" element={<Institute />} />
        <Route exact path="/BatchYear" element={<BatchYear />} />
        <Route exact path="/Batches" element={<Batches />} />
        <Route exact path="/UpdateYear/:id" element={<UpdateYear />} />
        <Route exact path="/UpdateBatch/:id" element={<UpdateBatch />} />
        <Route exact path="/SearchOption" element={<SearchOption />} />
      </Routes>
    </div>
  );
}

export default App;
