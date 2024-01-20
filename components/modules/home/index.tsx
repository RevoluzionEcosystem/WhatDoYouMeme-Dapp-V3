"use client"

import FirstSection from "./first-section"
import SecondSection from "./second-section"
import ThirdSection from "./third-section"
import FourthSection from "./fourth-section"

export default function Home() {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    )
}