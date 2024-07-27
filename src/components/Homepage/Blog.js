import '../../styles/Blog.css'
import blogImage1 from '../../assets/blog-image-1.png'
import smallBlogImage1 from '../../assets/small-blog-1.png'

// import blogImage1 from '../../assets/'

// const blogDetails = [
//     {
//         id: 1,
//         image: blogImage1,
//         date: "May 3, 2024",
//         title: Lorem ipsum dolor sit amet consectetur adipisicing elit.,
//         description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum,
//     },
// ]

const Blog = () => {
    <section className="blog-section">
        <div className="blog-header">
            <div className="article-text">Our Blog & Articles</div>
            <div className="article-btn">Read All Articles</div>
        </div>
        <div className="blog-content">
            <div className="big-blog">
                <img src="{blogImage1}" alt="" />
                <div className="blog-date">May 3, 2024</div>
                <div className="blog-title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                <div className="blog-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facilis, est totam maiores nihil eligendi doloremque aliquam possimus dolorum</div>
            </div>
            <div className="small-blogs-section">
                <div className="small-blogs-content">
                    <div className="small-blogs-upper">
                        <img src="" alt="" className="small-blog-image" />
                        <div className="small-blog-date">May 3, 2024</div>
                        <div className="small-blog-title">Sample Text</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Blog