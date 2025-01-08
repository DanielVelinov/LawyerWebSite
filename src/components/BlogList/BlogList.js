import React from 'react';
import { Link } from 'react-router-dom';
import blog3 from '../../images/blog-details/comments-author/img-1.jpg';
import blog4 from '../../images/blog-details/comments-author/img-2.jpg';
import blog5 from '../../images/blog-details/comments-author/img-3.jpg';
import blog6 from '../../images/blog-details/author.jpg';
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {
    const { slug } = useParams();

    const BlogDetails = blogs.find(item => item.slug === slug);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <div className="date-entry-meta">
                                    <div className="cat">Адвокат, Право</div>
                                    <div className="entry-meta">
                                        <span>От: <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Админ</Link> </span>
                                        <span>Дата: 20 януари 2020</span>
                                    </div>
                                </div>
                                <h2>Най-цветните личности и силни институции, както и оригинални коментари от света</h2>
                                <p>Когато Грегор Самса се събуди от неспокойни сънища, той се намери превърнат в ужасно насекомо. Лежеше на бронеподобния си гръб и ако вдигнеше малко главата си, можеше да види кафявото си коремче, леко издуто и разделено на твърди сегменти. Постелката едва успяваше да го покрие и изглеждаше, че всеки момент ще се свлече.</p>
                                <blockquote>
                                    „Събирането на текстилни мостри беше разпръснато на масата.“ 
                                    <span className="quoter">- Джон Доу</span>
                                </blockquote>
                                <h3>Над хоризонта консорциумът показва този концептуален автомобил, наречен NCV</h3>
                                <p>Грегор обърна поглед към прозореца и тъжното време отвън. "Какво се случи с мен?" помисли си той. Това не беше сън.</p>
                            </div>

                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Семейство</Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Адвокат</Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Брандинг</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use" target="_blank"><img src={blog6} alt="" /></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use" className="author-name">Мишел Дон</Link>
                                    <p>Описвайки шапка и кожен шал, които покриваха ръката ѝ, докато гледаше право напред.</p>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">Коментари</h3>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Публикувай коментар</h3>
                                    <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Напишете вашия коментар..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Уебсайт" type="url" />
                                            <input placeholder="Име" type="text" />
                                            <input placeholder="Имейл" type="email" />
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Публикувай коментар" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;
