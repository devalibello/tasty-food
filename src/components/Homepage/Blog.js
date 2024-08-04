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
        title: 'Exploring the Culinary Delights of Our Breakfast Menu',
        description: 'Discover the secrets behind our nutritious and delicious breakfast options, designed to kickstart your day with energy and flavor.'
    },
    {
        id: 2,
        image: smallBlogImage2,
        date: "May 3, 2024",
        title: 'Savor the Flavors: A Deep Dive into Our Main Dishes',
        description: 'Join us as we explore the rich and diverse flavors of our main dishes, each crafted with the finest ingredients and culinary expertise.'
    },
    {
        id: 3,
        image: smallBlogImage3,
        date: "January 3, 2024",
        title: 'Refreshing Beverages: Perfect Pairings for Every Meal',
        description: 'Learn about our selection of refreshing drinks, from classic cocktails to unique house specials, perfect for complementing any meal.'
    },
    {
        id: 4,
        image: smallBlogImage4,
        date: "April 3, 2023",
        title: 'Indulge Your Sweet Tooth: Our Delectable Desserts',
        description: 'Take a closer look at our irresistible desserts, where each creation offers a perfect blend of taste and presentation to end your meal on a high note.'
    },
];


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
            <img src={blogImage1} alt="Culinary Delights" className='big-blog-image'/>
            <div className="big-blog-content">
                <div className="blog-date">May 3, 2024</div>
                <div className="blog-title">A Culinary Journey: Discover the Art of Fine Dining</div>
                <div className="blog-description">
                    Join us on an exquisite culinary journey as we delve into the art of fine dining. Explore the creativity and passion that go into crafting each dish, from selecting the finest ingredients to perfecting the presentation. Our commitment to excellence ensures an unforgettable dining experience.
                </div>
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