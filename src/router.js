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
import Mac from "@/components/Songs.Content/Mac"
import Kanye from "@/components/Songs.Content/Kanye"
import Nirvana from "@/components/Songs.Content/Nirvana"
import Kendrick from "@/components/Songs.Content/Kendrick"
import Thai from "@/components/Songs.Content/Thai"
import Brock from "@/components/Songs.Content/Brock"
import Drums from "@/components/Songs.Content/Drums"
import Black from "@/components/Songs.Content/Black"
import Frank from "@/components/Songs.Content/Frank"
import Bones from "@/components/Songs.Content/Bones"
import Gambino from "@/components/Songs.Content/Gambino"
import Dorn from "@/components/Songs.Content/Dorn"
import Saba from "@/components/Songs.Content/Saba"
import Cudi from "@/components/Songs.Content/Cudi"
import Queen from "@/components/Songs.Content/Queen"
import Travis from "@/components/Songs.Content/Travis"
import Lean from "@/components/Songs.Content/Lean"
import TArtist from "@/components/Artist.Content/TArtist"






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
    {
      path: "/mac",
      name: "mac",
      component: Mac
    },
    {
      path: "/kanye",
      name: "kanye",
      component: Kanye
    },
    {
      path: "/nirvana",
      name: "nirvana",
      component: Nirvana
    },
    {
      path: "/kendrick",
      name: "kendrick",
      component: Kendrick
    },
    {
      path: "/thai",
      name: "thai",
      component: Thai
    },
    {
      path: "/brock",
      name: "brock",
      component: Brock
    },
    {
      path: "/drums",
      name: "drums",
      component: Drums
    },
    {
      path: "/black",
      name: "black",
      component: Black
    },
    {
      path: "/frank",
      name: "frank",
      component: Frank
    },
    {
      path: "/bones",
      name: "bones",
      component: Bones
    },
    {
      path: "/gambino",
      name: "gambino",
      component: Gambino
    },
    {
      path: "/dorn",
      name: "dorn",
      component: Dorn
    },
    {
      path: "/saba",
      name: "saba",
      component: Saba
    },
    {
      path: "/cudi",
      name: "cudi",
      component: Cudi
    },
    {
      path: "/queen",
      name: "queen",
      component: Queen
    },
    {
      path: "/travis",
      name: "travis",
      component: Travis
    },
    {
      path: "/lean",
      name: "lean",
      component: Lean
    },
    {
      path: "/tartist",
      name: "tartist",
      component: TArtist
    },
  ]
})
