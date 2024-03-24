import React from 'react';
import Section from '../components/section';
import { Urls } from '../helper';

export default function WhoCanJoinSection(): React.JSX.Element {

    return (
        <Section title="Who can join">
            <p>
                Anyone living in the area indicated by the <span style={{ color: 'red' }}>red line</span> below
                can <a href={Urls.SignUp} target="_blank" rel="noreferrer">sign up</a>.
            </p>

            <p style={{ textAlign: 'center' }}>
                <img src="map.png" style={{ maxWidth: '100%' }} alt="Map" />
            </p>
        </Section>
    );
}