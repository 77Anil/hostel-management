import { Outlet } from "react-router-dom";

export default function MainLayout(): React.ReactElement {
  return (
    <main>
      <div>Header</div>
      <Outlet />
    </main>
  );
}
