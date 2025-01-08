import React from 'react'

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.pageTitle}</h2>
                        <p>За да се свържете с нас за насрочване на дата и час за консултация по Ваш правен проблем
                        използвайте посочените координати за контакт или ни пишете чрез контактната форма.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;