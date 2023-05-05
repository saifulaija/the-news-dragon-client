import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hoks/UseTitle';

const Category = () => {
    useTitle('Category')

    const categoryNews= useLoaderData();

    const {id} = useParams();
    return (
        <div>
           {id &&  <h3>this is category : {categoryNews.length}</h3>}

            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;