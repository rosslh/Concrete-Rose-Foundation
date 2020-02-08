import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("../content/languages/en-CA.json"));
register("ar", () => import("../content/languages/ar-EG.json"));
register("en-CA", () => import("../content/languages/en-CA.json"));
register("ar-EG", () => import("../content/languages/ar-EG.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
