import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyPermissions } from "../features/UserPermission/userPermissionSlice";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import DashboardSkeleton from "../components/skeletons/DashboardSkeleton";
import ProfileIcon from "../components/common/ProfileIcon";

const Dashboard = () => {

  const { user } = useAuth();
  console.log("user from dashboard:", user)
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);


  useEffect(() => {
    if (user?.id) {
      dispatch(fetchMyPermissions(user.id));
    }
  }, [user, dispatch]);

  const { loggedInUserPermissions = [], loading } = useSelector(
    state => state.userPermission || {}
  );

  if (!user) return null;

  const visibleModules = loggedInUserPermissions.filter((module) => {
    const menus = module?.menus || {};
    const allMenus = Object.values(menus).flat();
    return allMenus.some((menu) => menu.actions?.includes("view"));
  });

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900">

      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 py-3 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-300">
          Asset<span className="text-gray-700 dark:text-gray-200">Tool</span>
        </div>
        <ProfileIcon />
      </nav>


      <div className="p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Welcome back, {user.firstName} 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your assets and access your modules from one place
          </p>
        </div>


        {loading ? (
          <DashboardSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleModules.map((mod) => (
              <Link
                key={mod.modulePath}
                to={`/module/${mod.modulePath}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {mod.moduleName}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Access and manage {mod.moduleName.toLowerCase()} related operations
                  </p>

                  <div className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                    Open Module →
                  </div>
                </div>
              </Link>
            ))}
          </div>

        )}

      </div>
    </div>
  );
};

export default Dashboard;
