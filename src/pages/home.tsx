import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Section from '../components/section';
import { Urls } from '../helper';
import { Link } from 'react-router-dom';
import WhoCanJoinSection from '../sections/who-can-join';

export default function Home(): React.JSX.Element {

    return (
        <>
            <Section title="Welcome">
                This site is for members of the Queens Park, Bournemouth What's App Community.
            </Section>

            <Section title="About Us">
                <p>
                    This community has been created to enable residents of Queens Park, Bournemouth to be able to communicate freely and easily about
                    anything related to their community.
                </p>
                
                {/* <p>
                    The What's App community has been broken down into a number of topic focussed groups including
                    <ul>
                        <li></li>
                    </ul>
                    Topics can include Community Events, Security, Lost &amp; Found, Neighbourhood Planning or any other community focussed talk.
                </p> */}
                
                <p>
                    <Button target='_blank' rel="noreferrer" href={Urls.HowItWorks} variant='primary' size='sm'>How it works</Button>
                </p>
            </Section>

            <Row>
                <Col>
                    <Section title="Sign Up">
                        <p>
                            Sign up for the Queens Park Community What's App Group. Once you are approved, one of our admins will add you in.
                        </p>

                        <p>
                            <Button target='_blank' rel="noreferrer" href={Urls.SignUp} variant='primary' size='sm'>Sign Up</Button>
                        </p>
                    </Section>
                </Col>
                <Col>

                    <Section title="Code of Conduct">

                        <p>
                            Read about our code of conduct to see how we respect the members of our community group.
                        </p>
                        <p>
                            <Link to={Urls.Code} className='btn btn-primary btn-sm'>Read more</Link>
                        </p>

                    </Section>

                </Col>
            </Row>

            <WhoCanJoinSection />
            
        </>
    );
}