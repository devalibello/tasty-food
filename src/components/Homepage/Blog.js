import '../../styles/Blog.css'
import blogImage1 from '../../assets/blog-image-1.png'
import smallBlogImage1 from '../../assets/small-blog-1.png'

// import blogImage1 from '../../assets/'

const blogDetails = [
    {
        id: 1,
        image: smallblogImage1,
        date: "December 3, 2023",
        title: Lorem ipsum dolor sit amet consectetur adipisicing elit.,
        description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum,
    },
    {
        id: 1,
        image: smallblogImage2,
        date: "May 3, 2024",
        title: Lorem ipsum dolor sit amet consectetur adipisicing elit.,
        description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum,
    },
    {
        id: 1,
        image: smallblogImage3,
        date: "January 3, 2024",
        title: Lorem ipsum dolor sit amet consectetur adipisicing elit.,
        description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum,
    },
    {
        id: 1,
        image: smallblogImage4,
        date: "April 3, 2023",
        title: Lorem ipsum dolor sit amet consectetur adipisicing elit.,
        description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum,
    },
]

const Blog = () => {
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
                    <div className="blog-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatum et, omnis laudantium nam rerum!</div>
                </div>                
            </div>
            <div className="small-blogs-content">
                <div className="small-blogs-upper">
                    <img src={smallBlogImage1} alt="" className="small-blog-image" />
                    <div className="small-text-content">
                        <div className="blog-date">May 3, 2024</div>
                        <div className="blog-title">Sample Text</div>
                    </div>
                </div>
                <div className="small-blogs-upper">
                    <img src={smallBlogImage1} alt="" className="small-blog-image" />
                    <div className="small-text-content">
                        <div className="blog-date">May 3, 2024</div>
                        <div className="blog-title">Sample Text</div>
                    </div>
                </div>
            </div>
            <div className="small-blogs-content">
                <div className="small-blogs-upper">
                    <img src={smallBlogImage1} alt="" className="small-blog-image" />
                    <div className="small-text-content">
                        <div className="blog-date">May 3, 2024</div>
                        <div className="blog-title">Sample Text</div>
                    </div>
                </div>
                <div className="small-blogs-upper">
                    <img src={smallBlogImage1} alt="" className="small-blog-image" />
                    <div className="small-text-content">
                        <div className="blog-date">May 3, 2024</div>
                        <div className="blog-title">Sample Text</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog