import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPosts from "../shop/PopularPosts";
import Tags from "../shop/Tags";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)

  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} className="w-100"></img>
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  convallis convallis tellus id interdum velit
                                  laoreet id donec ultrices tincidunt arcu non
                                  sodales neque sodales ut etiam sit amet nisl
                                  purus in mollis nunc sed id semper risus in
                                  hendrerit gravida rutrum quisque non tellus
                                  orci ac auctor augue mauris augue neque
                                  gravida in fermentum et sollicitudin ac orci
                                  phasellus egestas tellus rutrum tellus
                                  pellentesque eu tincidunt tortor aliquam nulla
                                  facilisi cras fermentum odio eu feugiat
                                  pretium nibh ipsum consequat nisl vel pretium
                                  lectus quam id leo in vitae turpis massa sed
                                  elementum tempus egestas sed sed risus pretium
                                  quam vulputate dignissim suspendisse in est
                                  ante in nibh mauris
                                </p>
                                <blockquote>
                                  <p>
                                    Ab veritatis corrupti et animi saepe et
                                    provident atque et deleniti perspiciatis et
                                    eius harum ut aliquam iusto. A temporibus
                                    adipisci aut vitae dolorem quo adipisci
                                    officia?
                                  </p>
                                  <cite>
                                    <a href="#">...John Doe</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  gravida in fermentum et sollicitudin ac orci
                                  phasellus egestas tellus rutrum tellus
                                  pellentesque eu tincidunt tortor aliquam nulla
                                  facilisi cras fermentum odio eu feugiat
                                  pretium nibh ipsum consequat nisl vel pretium
                                  lectus quam id leo in vitae turpis massa sed
                                  elementum tempus egestas sed sed risus pretium
                                  quam vulputate dignissim suspendisse in est
                                  ante in nibh mauris
                                </p>
                                <img src="/src/assets/images/blog/single/01.jpg"></img>
                                <p>
                                  Gravida in fermentum et sollicitudin ac orci
                                  phasellus egestas tellus rutrum tellus
                                  pellentesque eu tincidunt tortor aliquam nulla
                                  facilisi cras fermentum odio eu feugiat
                                  pretium nibh ipsum consequat nisl vel pretium
                                  lectus quam id leo in vitae turpis massa sed
                                  elementum tempus egestas sed sed risus pretium
                                  quam vulputate dignissim suspendisse in est
                                  ante in nibh mauris
                                </p>

                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg"></img>
                                  <a
                                    href="https://youtu.be/b9eMGE7QtTk?si=W1Zr815Ec1bL-p5Y"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Gravida in fermentum et sollicitudin ac orci
                                  phasellus egestas tellus rutrum tellus
                                  pellentesque eu tincidunt tortor aliquam nulla
                                  facilisi cras fermentum odio eu feugiat
                                  pretium nibh ipsum consequat nisl vel pretium
                                  lectus quam id leo in vitae turpis massa sed
                                  elementum tempus egestas sed sed risus pretium
                                  quam vulputate dignissim suspendisse in est
                                  ante in nibh mauris
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Shop</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                            Evisvulate parallel Processes via Technica Sound Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="next">
                        Next Blog <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                            Evisvulate parallel Processes via Technica Sound Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>



            <div className="col-lg-4 col-12">
                <aside>
                    <Tags />
                    <PopularPosts />
                </aside>                                        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
