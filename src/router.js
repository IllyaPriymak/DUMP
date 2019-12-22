import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import Artist from "@/components/Artist"
import Songs from "@/components/Songs"
import Album from "@/components/Album"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/artist",
      name: "artist",
      component: Artist
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs
    },
    {
      path: "/album",
      name: "album",
      component: Album
    }
  ]
})
