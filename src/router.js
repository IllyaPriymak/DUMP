import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import Artist from "@/components/Artist"
import Songs from "@/components/Songs"
import Album from "@/components/Album"
import TopCharts from "@/components/TopCharts"
import Tyler from "@/components/Songs.Content/Tyler"
import Drake from "@/components/Songs.Content/Drake"
import Asap from "@/components/Songs.Content/Asap"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/topcharts",
      name: "topcharts",
      component: TopCharts
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
    },
    {
      path: "/tyler",
      name: "tyler",
      component: Tyler
    },
    {
      path: "/drake",
      name: "drake",
      component: Drake
    },
    {
      path: "/asap",
      name: "asap",
      component: Asap
    },
  ]
})
