import '../../styles/Blog.css'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import blogImage1 from '../../assets/blog-image-1.webp'
import smallBlogImage1 from '../../assets/small-blog-1.webp'
import smallBlogImage2 from '../../assets/small-blog-2.webp'
import smallBlogImage3 from '../../assets/small-blog-3.webp'
import smallBlogImage4 from '../../assets/small-blog-4.webp'

gsap.registerPlugin(ScrollTrigger)


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

    const bigBlogRef = useRef(null);
    const smallBlog1Ref = useRef(null)
    const smallBlog2Ref = useRef(null)

    const animateBlog = () => {
        const smallBlog1 = smallBlog1Ref.current.querySelectorAll('div')

        const smallBlog2 = smallBlog2Ref.current.querySelectorAll('div')
 
        gsap.fromTo(bigBlogRef.current,{autoAlpha: 0, x: 100, duration: 1.5}, {autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: bigBlogRef.current,
            start: "top 87%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }})
        gsap.fromTo(smallBlog1,{autoAlpha: 0, x: 100},{autoAlpha: 1, x: 0, duration: 2, stagger: 0.2, scrollTrigger: {
            trigger: smallBlog1,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, '-=0.6')
        gsap.fromTo(smallBlog2,{autoAlpha: 0, x: 100},{autoAlpha: 1, x: 0, duration: 2, stagger: 0.2, scrollTrigger: {
            trigger: smallBlog2,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, '-=0.6')
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
            <div className="big-blog" ref={bigBlogRef}>
                <img src={blogImage1} alt="" className='big-blog-image'/>
                <div className="big-blog-content">
                    <div className="blog-date">May 3, 2024</div>
                    <div className="blog-title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                    <div className="blog-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero molestias inventore tempora amet a omnis laborum earum. Odit natus quia repellendus, sequi eveniet officiis ducimus facilis assumenda possimus nam obcaecati.</div>
                </div>                
            </div>
            <div className="small-blogs-content" ref={smallBlog1Ref}>
                {firstGroup.map((blog) => 
                    <div className="small-blogs-upper" key={blog.id}>
                        <img src={blog.image} alt="" className="small-blog-image" />
                        <ul className="small-text-content">
                            <li className="blog-date">{blog.date}</li>
                            <li className="blog-title">{blog.title}</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="small-blogs-content" ref={smallBlog2Ref}>
                {secondGroup.map((blog) => 
                <div className="small-blogs-upper" key={blog.id}>
                    <img src={blog.image} alt="" className="small-blog-image" />
                    <ul className="small-text-content">
                        <li className="blog-date">{blog.date}</li>
                        <li className="blog-title">{blog.title}</li>
                    </ul>
                </div>
                )}
            </div>
        </div>            
    </section>
    )
}

export default Blog