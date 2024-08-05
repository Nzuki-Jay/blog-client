import React from 'react'
import banner1 from "../../assets/banner-1.avif";
import author3 from "../../assets/author3.png";
import './Blog.scss';
import { MdComment } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import RelatedBlog from '../../components/RelatedBlog/RelatedBlog';
import { useParams } from 'react-router-dom';
import { selectAllBlogs, selectBlogById } from '../../redux/features/blogs/blogsStateSlice';
import { useSelector } from 'react-redux';


const Blog = () => {

    // get blog
    const {blogId} = useParams();
    const blog = useSelector(state => selectBlogById(state, blogId));

    // get all blogs
    const blogs = useSelector(selectAllBlogs);

    // get related blogs 
    const relatedBlogs = blogs.filter(item => 
        item.tags.some(tag => blog.tags.includes(tag)) && item.id !== blogId);

   
    return (
        <article className='blogContainer'>
            <div className='blogTop'>
                <h3>
                    {blog?.title}
                </h3>
                <p>{blog?.category}</p>
                <img src={blog?.image} alt="blog image">
                </img>
            </div>

            <div className='blogCenter'>
                <div className='centerLeft'>
                    <p className='blogTitle'>
                        {blog?.content}
                    </p>
                    <p className='blogBody'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                        blanditiis tempora perferendis optio eveniet a fuga cum ipsam,
                        aperiam vitae quasi nisi corporis adipisci molestiae facere qui,
                        culpa distinctio quisquam voluptatum illum veniam, voluptate fugit
                        unde voluptas? Fugiat quidem maxime neque fugit ea! Rem soluta optio
                        eos vel? Perferendis maxime, iure molestias totam, autem voluptatum
                        nulla ad provident quam labore sint earum rem unde quis aspernatur
                        possimus pariatur assumenda magnam eligendi quos, consectetur facere
                        consequatur tempora aut. Architecto beatae unde repellat accusantium
                        velit optio earum pariatur porro. Impedit molestiae officia ex nemo
                        officiis aut, facilis, nesciunt recusandae repudiandae repellendus
                        corrupti sequi mollitia. Eaque corporis nisi repudiandae voluptas
                        eius soluta repellat consequatur praesentium vero, ad nulla, aliquid
                        vel illum sint facere quibusdam necessitatibus laudantium voluptate
                        architecto fuga omnis. Doloremque vero adipisci maiores,
                        consequuntur, eveniet dignissimos reiciendis ad totam nemo iste
                        tempora aliquam itaque quo beatae numquam doloribus recusandae iusto
                        modi perferendis ipsum a fugiat quam harum dicta. Et atque pariatur,
                        error quam fuga earum adipisci. Sequi quo voluptatem amet ullam
                        optio? Quam, dignissimos quidem? Culpa necessitatibus, hic a cumque,
                        molestias dicta nisi autem consequatur beatae tenetur laudantium
                        eveniet quas consequuntur, repudiandae incidunt atque amet assumenda
                        aut. Quae magnam tempore optio temporibus!
                    </p>
                    <div>
                        <span>
                            <MdComment />
                            Comments
                        </span>

                        <span>
                            <CiHeart/>
                            1k likes
                        </span>

                        <span>
                            <FaRegEye/>
                            2.5k
                        </span>

                        <Link className='homeLink' to="/"> 
                            <IoArrowBack />
                            Back To Blogs 
                        </Link>
                    </div>

                </div>

                <div className='centerRight'>
                    <div className='blogAuthor'>
                        <img src={blog?.authorPic} alt="blog author" />
                        <div className='authorName'>
                            <p>
                                {blog?.author}
                            </p>
                            <small>
                                Editor
                            </small>
                        </div>
                    </div>
                    <p>
                        {blog?.author} writes about {blog?.category} Yourself required no at thoughts
                        delicate landlord it be. Branched dashwood do is whatever it.
                    </p>
                    <button>
                        Follow
                    </button>

                </div>
            </div>

            <div className='divider'></div>

            <div className='blogBottom'>
                <h4>Related Blogs</h4>
                <ul>
                    
                    {
                        relatedBlogs.length > 6 && relatedBlogs.slice(0, 6).map(blog => (
                            <RelatedBlog  key={blog.id} blog={blog}/>
                        ))
                    }
                    
                </ul>
            </div>

        
        </article>
    )
}

export default Blog
