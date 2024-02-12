const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },
  {
    path: "/players",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/PlayersPage.vue") }],
  },
  {
    path: "/gallery",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GaleryPage.vue") }],
  },
  {
    path: "/kit",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/KitPage.vue") }],
  },
  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
