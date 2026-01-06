import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === "true";

const useAuthUser = () => {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    enabled: !DEMO_MODE, // 🚀 STOP API CALL IN DEMO MODE
  });

  if (DEMO_MODE) {
    return {
      authUser: {
        _id: "demo-user",
        name: "Demo User",
        email: "demo@varta.app",
        isOnboarded: true,
      },
      isLoading: false,
    };
  }

  return { authUser, isLoading };
};

export default useAuthUser;
