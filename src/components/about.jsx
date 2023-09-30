import pfpimg from '../assets/images/pfp.jpg';

export default function About(){
    return(
        <section className="comp-container space-y-14">
            {/* content container */}
            <div className="content-container text-left space-y-8">
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-center text-3xl font-bold">About me</h2>
                    <hr className="border-2 border-blueprimary w-20"/>
                </div>
                <div className="flex flex-col items-center border-2 rounded-2xl border-blueblack bg-gray-200 p-5 space-y-4 lg:flex-row-reverse lg:space-y-0">
                    <img src={pfpimg} alt="" className="w-72 rounded-2xl lg:ml-7"/>
                    {/* text container */}
                    <div className="space-y-3">
                        <p>Hey there! I'm a web developer and designer, and I have knowledge in SQL, PHP, HTML & CSS to JavaScript with awesome frameworks like ReactJS and Vue.js. I'm also comfortable working with MySQL, MongoDB, ASP.NET. But it's not just about the tech – I've got a solid grasp on Search Engine Optimization (SEO) and I've even dabbled in web analytics and data visualization.</p>
                        <p>I took on the Interactive Media Design - Web diploma program and really zoned in on user experience (UX) and user interface (UI) design. Crafting responsive and visually appealing websites? That's my jam! Let's make the web a better place together!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}