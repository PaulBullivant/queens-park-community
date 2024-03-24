import React from 'react';
import Section from '../components/section';
import { Urls } from '../helper';
import { Link } from 'react-router-dom';
import WhoCanJoinSection from '../sections/who-can-join';

export default function HowItWorks(): React.JSX.Element {

    return (
        <>
            <Section title="How it works">
                
                <p>
                    Our community keep in touch using a <a href={Urls.WhatsAppCommunities} target="_blank" rel="noreferrer">What's App community</a> to chat and share ideas.
                </p>
                
                <p>
                    Complete the following steps to join in:
                </p>
                <ol>
                        <li>Make sure you live in the elegible area (see below)</li>
                        <li>Read our <a href={Urls.Code}>code of conduct</a></li>
                        <li>Make sure you have <a href={Urls.WhatsApp} target='=_blank' rel='noreferrer'>what's app</a> installed on your phone.</li>
                        <li><a href={Urls.SignUp}>Sign up</a> to join the community.</li>
                        <li>Wait for one of our admins to add you to the What's app community.</li>
                        <li>Join our groups (see below)</li>
                    </ol>
                </Section>
                <Section title="Our groups">
                <p>
                    Once you have been added to the community by an admin, you will need to join the groups
                    you are interested in:
                </p>                
                <p>
                    Initially, we suggest you join all groups and then leave the ones you are not interested in.
                    Our main groups are:
                </p>
                <ul>
                    <li>
                        <strong>General</strong><br />
                        Ask questions about our what's app community, suggest new groups to be added
                        or get in touch with our admins.
                    </li>
                    <li>
                        <strong>Council services</strong><br />
                        Questions and info about our council services, including waste collection, street lighting
                        street cleaning etc
                    </li>
                    <li>
                        <strong>Security, Safety & Crime</strong><br />
                        Discuss security issues, any local crime and keeping our community safe.
                    </li>
                    <li>
                        <strong>Services & advices</strong><br/>
                        Ask your community about trades people or get other advice from members of our community.
                    </li>
                    <li>
                        <strong>Buy, Sell & Recycle</strong><br />
                        Buy, sell or give away any old items to your community.
                    </li>
                    <li>
                        <strong>Lost & Found</strong><br />
                        Share details of any items or pets lost or found.
                    </li>
                    <li>
                        <strong>Planning</strong><br />
                        Planning permission discussion and issues.
                    </li>
                    <li>
                        <strong>Traffic & Road closures</strong><br />
                        Share details of any current or future disruption to our journeys.
                    </li>
                    <li>
                        <strong>Community Spirit</strong><br />
                        Share photos and positive experiences about your community with your community
                    </li>
                    <li>
                        <strong>Fouling & littering</strong><br />
                        Raise any issues with littering or other mess in our community and park
                    </li>                    
                    <li>
                        <strong>Politics</strong><br />
                        For wider political issues and discussion
                    </li>

                </ul>
                
            </Section>

            <WhoCanJoinSection />
        </>
    );
}