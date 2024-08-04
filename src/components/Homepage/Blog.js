import '../../styles/Blog.css'
import blogImage1 from '../../assets/blog-image-1.webp'
import smallBlogImage1 from '../../assets/small-blog-1.webp'
import smallBlogImage2 from '../../assets/small-blog-2.webp'
import smallBlogImage3 from '../../assets/small-blog-3.webp'
import smallBlogImage4 from '../../assets/small-blog-4.webp'


const blogDetails = [

    {
        id: 1,
        image: smallBlogImage1,
        date: "December 3, 2023",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum'
    },
    {
        id: 2,
        image: smallBlogImage2,
        date: "May 3, 2024",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum'
    },
    {
        id: 3,
        image: smallBlogImage3,
        date: "January 3, 2024",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum'
    },
    {
        id: 4,
        image: smallBlogImage4,
        date: "April 3, 2023",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum'
    },
]

const Blog = () => {

    const firstGroup = blogDetails.slice(0,2);
    const secondGroup = blogDetails.slice(2,4);

    const aboutTextRef = useRef(null);
    const aboutPictureRef = useRef(null)
    const btnRef = useRef(null)

    const animateAbout = () => {
        const aboutTextElements = aboutTextRef.current.querySelectorAll('li');
 
        gsap.fromTo(aboutTextElements,{autoAlpha: 0, x: 100, duration: 1.5}, {autoAlpha: 1, x: 0, duration: 2, stagger: 0.2, scrollTrigger: {
            trigger: aboutTextElements,
            start: "top 87%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }})
        gsap.fromTo(aboutPictureRef.current,{autoAlpha: 0, x: -100},{autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: aboutPictureRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, 0)
        gsap.fromTo(btnRef.current,{autoAlpha: 0, x: 100},{autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: aboutPictureRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, 0)
    }

    useGSAP(() => {
        animateBlog();
    }, [])
    
    return(
    <section className="blog-section">
        <div className="blog-header">
            <div className="article-text">Our Blog & Articles</div>
            <div className="article-btn">Read All Articles</div>
        </div>
        <div className="blog-content">
            <div className="big-blog">
                <img src={blogImage1} alt="" className='big-blog-image'/>
                <div className="big-blog-content">
                    <div className="blog-date">May 3, 2024</div>
                    <div className="blog-title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                    <div className="blog-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero molestias inventore tempora amet a omnis laborum earum. Odit natus quia repellendus, sequi eveniet officiis ducimus facilis assumenda possimus nam obcaecati.</div>
                </div>                
            </div>
            <div className="small-blogs-content">
                {firstGroup.map((blog) => 
                    <div className="small-blogs-upper" key={blog.id}>
                        <img src={blog.image} alt="" className="small-blog-image" />
                        <div className="small-text-content">
                            <div className="blog-date">{blog.date}</div>
                            <div className="blog-title">{blog.title}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="small-blogs-content">
                {secondGroup.map((blog) => 
                <div className="small-blogs-upper" key={blog.id}>
                    <img src={blog.image} alt="" className="small-blog-image" />
                    <div className="small-text-content">
                        <div className="blog-date">{blog.date}</div>
                        <div className="blog-title">{blog.title}</div>
                    </div>
                </div>
                )}
            </div>
        </div>            
    </section>
    )
}

export default Blog