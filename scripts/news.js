import { fetchNews } from "./firebase.js";
import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const newsApp = reactive({
  news: [],
  isLoading: true,
  async fetchNewsFromFirebase() {
    const fethedNews = await fetchNews();
    fethedNews.sort((a, b) => b.datePosted.seconds - a.datePosted.seconds);
    this.news = fethedNews.map((item) => ({
      ...item,
      datePosted: this.formatDate(item.datePosted),
    }));
    this.isLoading = false;
  },
  formatDate(datePosted) {
    if (datePosted && datePosted.seconds) {
      const date = new Date(datePosted.seconds * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1; // JavaScript months are 0-indexed.
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }
    return "";
  },
});

newsApp.fetchNewsFromFirebase();

createApp({ newsApp }).mount("#news-container");
