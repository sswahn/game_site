import Provider from "./Provider";
import UserNav from "./components/UserNav";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Provider>
      <UserNav />
      <Sidebar />
    </Provider>
  );
}
