"use client"
import Link from "next/link"
import { getProjects } from "@/api/projects";
import { useEffect } from "react"

export default function Dashboard() {

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      console.log('Projects:', projects);
    }
    fetchData();
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
    </>
  )
}