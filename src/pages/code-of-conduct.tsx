import React from 'react';
import Section from '../components/section';
import { Urls } from '../helper';

export default function CodeOfConduct() : React.JSX.Element {

    return (
        <>
            <Section title="Our Pledge">
                <p>We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone,
                    of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression,
                    of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>

                <p>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.</p>
            </Section>

            <Section title="Community Groups">
                <p>Our community is made up of a number of  <a href={Urls.HowItWorks}>topic focused groups</a> that members can join and leave as desired.</p>

                <p>Community members are asked to keep comments relevant to the topic of the group in which they are commenting.
                    This ensures everyone in the group gets a positive and useful experience.</p>
            </Section>

            <Section title="Our Standards">
                <p>Examples of behaviour that contributes to a positive environment for our community include:</p>

                <ul>
                    <li>Demonstrating empathy and kindness toward other people</li>
                    <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                    <li>Giving and gracefully accepting constructive feedback</li>
                    <li>Accepting responsibility and apologising to those affected by our mistakes, and learning from the experience</li>
                    <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
                    <li>Not using the group as an outlet for moaning or negativity particularly when it is unrelated to our community</li>
                </ul>

                <p>Examples of unacceptable behaviour include:</p>

                <ul>
                    <li>The use of sexualized language or imagery, and sexual attention or
                    advances of any kind</li>

                    <li>The use of racist language or imagery</li>

                    <li>The use of language referencing in a negative, insulting or derogatory manner a person or a group of people due to age,
                        body size visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, education,
                         socio-economic status, nationality, personal appearance, race, religion or sexual identity and orientation.</li>

                    <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>

                    <li>Public or private harassment including name and shame</li>

                    <li>Publishing others&rsquo; private information, such as a physical/email
                    address or photo, without their explicit permission</li>

                    <li>Other conduct which could reasonably be considered inappropriate in a
                    professional setting</li>

                    <li>Private messaging any member of the community with the intent of harassing or using other 
                        offensive behaviours, including towards admins of the community</li>
                </ul>

            </Section>
                
            <Section title="Enforcement Responsibilities">
                <p>Community administrators are responsible for clarifying and enforcing our standards of acceptable behaviour and will take appropriate and fair corrective action in response to any
                   behavior that they deem inappropriate, threatening, offensive, or harmful.</p>

                <p>Community administrators have the right to remove comments and other contributions that are not aligned to this Code of Conduct, and
                    will communicate reasons for moderation decisions when appropriate.</p>

                <p>Community administrators are volunteers living within our community and do not monitor all comments and contributions to the community chat groups. All community members share
                   responsibility to flag up inappropriate content as defined by this Code of Conduct to the administrators for review, decision and action.</p>
            </Section>

            <Section title="Scope">
                This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the
                community in public spaces. Examples of representing our community include using an official e-mail address, posting via an
                official social media account, or acting as an appointed representative at an online or offline event.
            </Section>

            <Section title="Reporting any concerns">
                <p>
                    Instances of abusive, harassing, or otherwise unacceptable behaviour may be reported for enforcement
                    by contacting an administrtor of the community.
                </p>
                <p> 
                      All complaints will be reviewed and investigated promptly and fairly
                      and the complainant will be notified of the outcome and actions taken by the administrators of the community.
                </p>
                <p>
                    All community leaders are obligated to respect the privacy and security of the reporter of any incident.
                </p>
            </Section>
            <Section title="Enforcement Guidelines">

                <p>
                    If a member of the community posts into any group any message which falls into the category of unacceptable behaviours listed above then the Adminstrators of the community may at their discretion:  
                    
                    <ul>
                        <li>Require a post to be removed</li>
                        <li>Remove a post without notice</li>
                        <li>Require an apology to be made privately to any individual who may have been harmed.</li>
                        <li>Require an apology to be made publicly in the group (any such apology to be be approved by the Administrators of the group prior to it being published).</li>
                        <li>Remove the member from the group either temporarily or permanently.</li>
                    </ul>
                </p>
                <p>
                    If action is not taken by a member, when requested, Community Administrators will temporarily remove members from the community until the issue has been resolved.
                </p>

            </Section>
            <Section title="Attribution">
                <p>This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org">Contributor Covenant</a>, version 2.0,
                available at <a href='https://www.contributor-covenant.org/version/2/0/code_of_conduct'>https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</a>.</p>
            </Section>
        </>
    );
}