export default function Loader() {
    return (
        <div className="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <div className="w-full h-[90%] flex overflow-hidden">
                <div className="loading-anim">
                    <div className="border out" />
                    <div className="border in" />
                    <div className="border mid" />
                    <div className="circle">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>
            </div>
        </div>
    )
}