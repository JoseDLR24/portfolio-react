export default function About(){
    return(
        <>
        <section className="h-screen flex flex-col items-center justify-center space-y-14">
            <div className="flex flex-col items-center space-y-2">
                <div className="">
                <h2 className="text-center text-3xl font-bold">About me</h2>
                <hr className="border border-darkgreen w-20"/>
                </div>
                {/* content container */}
                <div className="w-8/12">
                <img src="" alt="" />
                {/* text container */}
                <div className="">
                    <p>Hey there! I'm a skilled web developer and designer, and I've got quite the toolkit under my belt. From SQL, PHP, HTML & CSS to JavaScript with awesome frameworks like ReactJS and Vue.js. I'm also pretty comfortable working with MySQL, MongoDB, ASP.NET. But it's not just about the tech – I've got a solid grasp on Search Engine Optimization (SEO) and I've even dabbled in web analytics and data visualization.</p>
                    <p>I took on the Interactive Media Design - Web diploma program and really zoned in on user experience (UX) and user interface (UI) design. Crafting responsive and visually appealing websites? That's my jam! Let's make the web a better place together!</p>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}