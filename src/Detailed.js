import React from 'react';
import './Detailed.css';

const Detailed = ({data}) => {
    console.log(data);

    const style1={
        margin:'3rem 2rem 1rem 2rem',
        textAlign:'center',
    }

    const style2={
        margin:'1rem 2rem 1rem 2rem',
        textAlign:'center',
    }

    return (
        <div>
            <img src={data.image} className="mainImage"/>
            <div>
                <h1 style={style1}>{data.title}</h1>
                <h2 style={{textAlign:'center'}}>{data.authors}</h2>
                <h2 style={{textAlign:'center'}}>{data.published}</h2>
                <p style={style1}>
                    {data.description}
                </p>
                <p style={style2}>
                    {data.subtitle}
                </p>
                <div style={style2}><a href={data.preview}>read book</a></div>
                <a style={{display:'flex',justifyContent:'center',marginBottom:'2rem'}} href={data.preview}><img src={data.image} style={{height:'40%',width:"40%"}}/></a>
            </div>
        </div>
    )
}

export default Detailed
