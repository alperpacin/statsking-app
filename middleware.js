import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: [
    "/",
    "/settings",
    "/league-of-legends",
    "/league-of-legends/(.*)",
    "/valorant",
    "/valorant/(.*)",
    "/teamfight-tactics",
    "/teamfight-tactics/(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
