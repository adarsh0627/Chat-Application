import { axiosInstance } from "./axios";

const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === "true";

/* ---------------- AUTH ---------------- */

export const signup = async (signupData) => {
  if (DEMO_MODE) {
    return {
      _id: "demo-user",
      name: "Demo User",
      email: "demo@varta.app",
      isOnboarded: true,
    };
  }
  const res = await axiosInstance.post("/auth/signup", signupData);
  return res.data;
};

export const login = async (loginData) => {
  if (DEMO_MODE) {
    return {
      _id: "demo-user",
      name: "Demo User",
      email: "demo@varta.app",
      isOnboarded: true,
    };
  }
  const res = await axiosInstance.post("/auth/login", loginData);
  return res.data;
};

export const logout = async () => {
  if (DEMO_MODE) return true;
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};

export const getAuthUser = async () => {
  if (DEMO_MODE) {
    return {
      _id: "demo-user",
      name: "Demo User",
      email: "demo@varta.app",
      isOnboarded: true,
    };
  }
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch {
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  if (DEMO_MODE) return true;
  const res = await axiosInstance.post("/auth/onboarding", userData);
  return res.data;
};

/* ---------------- USERS ---------------- */

export async function getUserFriends() {
  if (DEMO_MODE) {
    return [
      { _id: "1", name: "Alice", status: "online" },
      { _id: "2", name: "Bob", status: "offline" },
    ];
  }
  const res = await axiosInstance.get("/users/friends");
  return res.data;
}

export async function getRecommendedUsers() {
  if (DEMO_MODE) {
    return [
      { _id: "3", name: "Charlie" },
      { _id: "4", name: "David" },
    ];
  }
  const res = await axiosInstance.get("/users");
  return res.data;
}

export async function getFriendRequests() {
  if (DEMO_MODE) {
    return [{ _id: "5", name: "Emma" }];
  }
  const res = await axiosInstance.get("/users/friend-requests");
  return res.data;
}

export async function getOutgoingFriendsReqs() {
  if (DEMO_MODE) return [];
  const res = await axiosInstance.get("/users/outgoing-friend-requests");
  return res.data;
}

export async function sendFriendRequest(userId) {
  if (DEMO_MODE) return true;
  const res = await axiosInstance.post(`/users/friend-request/${userId}`);
  return res.data;
}

export async function acceptFriendRequest(requestId) {
  if (DEMO_MODE) return true;
  const res = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
  return res.data;
}

/* ---------------- CHAT ---------------- */

export async function getStreamToken() {
  if (DEMO_MODE) {
    return { token: "demo-stream-token" };
  }
  const res = await axiosInstance.get("/chat/token");
  return res.data;
}
