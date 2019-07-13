import React from 'react';
import {Link} from 'gatsby';
import { Layout } from '../components/layout';

const HomePage = () => ( 
    <Layout>
        <div>
            <h1>Gatsby JS workshop</h1>
            <p>learn how to use</p>
            <p>naming the file js and jsx also works</p>
            <Link to='/about-me'>About Me</Link>
        </div>
    </Layout>)

export default HomePage;