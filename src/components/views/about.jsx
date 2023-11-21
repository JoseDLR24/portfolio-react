import pfpimg from '../../assets/pfp.jpg';

export default function About(){
    return(
        <section id='about' className="comp-container min-h-fit space-y-14 bg-blueblack py-10 text-white">
            {/* content container */}
            <div className="content-container text-left space-y-8">
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-center text-3xl lg:text-4xl font-semibold">About me</h2>
                    <hr className="border-2 border-teal-400 w-20"/>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-4 lg:flex-row-reverse lg:space-y-0">
                    <img src={pfpimg} alt="" className="w-72 rounded-2xl lg:ml-7"/>
                    {/* text container */}
                    <div className="space-y-3 text-lg">
                        <p>Hey there! I'm a web developer and designer, and I have knowledge in SQL, PHP, HTML & CSS to JavaScript with awesome frameworks like React.js and Vue.js. I'm also comfortable working with MySQL, MongoDB, and ASP.NET. But it's not just about the tech – I've got a solid grasp on Search Engine Optimization (SEO) and I've even dabbled in web analytics and data visualization.</p>
                        <p>I took on the Interactive Media Design - Web diploma program and really zoned in on user experience (UX) and user interface (UI) design.</p>
                        <p>Crafting responsive and visually appealing websites? That's my jam! Let's make the web a better place together!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}