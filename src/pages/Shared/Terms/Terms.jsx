import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-black-50'>
            <h3>Terms & Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita autem error dolorem quasi ut doloribus esse unde officia, maxime dolore eius modi molestias fuga aspernatur a, delectus tempora! Saepe alias sed ab cupiditate corporis laudantium error adipisci repudiandae, qui facere ea deserunt dolorum dolores dolor beatae fugit, recusandae architecto aspernatur.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>

        </Container>
    );
};

export default Terms;
