"use client"

import Image from "next/image"
import {ContactForm} from "../components/contact-form"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useEffect, useState } from "react";
import { getAllEntities, addEntity } from "../database/service";
import { User } from "../models/user";

export default function Home() {
  return (
    <main>
      <ContactForm></ContactForm>
      <ThemeToggle></ThemeToggle>
    </main>
  )
}
