import React from 'react';
import {Helmet} from "react-helmet";

const Cookies = () => {
    return(
        <div className='section-privacy'>
            <Helmet>
                <title>Cookie Policy | Web Studios</title>
                <meta name="description" content='Cookie Policy for Web Stuidos that gives you an insight into how we use data..' />
            </Helmet>
            <h1 className='privacy-policy'>COOKIE POLICY</h1>
            <p className='strong'><strong>UPDATED: Dec 31, 2020</strong></p>
            <p className='privacy-policy__paragraph'>
            Web Studios (the “Company”, “we” or “us”), uses our website 
            and other internet-based tools to provide educational content, 
            resources and services. We are committed to being 
            transparent about how we and our partners use cookies 
            and similar technologies. The purpose of this Cookies 
            Policy is to provide you with information about how 
            cookies and similar technologies work, how we use these 
            technologies, and your choices regarding these technologies. 
            Please read this Cookies Policy together with our 
            Privacy Policy and Terms of Use, 
            which provides additional information 
            about our use of personal information and your rights. 
            We may use cookies, web beacons, tracking pixels, 
            and other tracking technologies when you visit our 
            website (www.webstudios.io), including any other media form, 
            media channel, mobile website, or 
            mobile application related or connected 
            thereto (collectively, the “Site”) 
            to help customize the Site and improve your experience. 
            We reserve the right to make changes to this 
            Cookie Policy at any time and for any reason. 
            We will alert you about any changes by updating 
            the “Last Updated” date of this Cookie Policy. 
            Any changes or modifications will be effective 
            immediately upon posting the updated Cookie Policy 
            on the Site, and you waive the right to receive specific
             notice of each such change or modification. 
             You are encouraged to periodically review this 
             Cookie Policy to stay informed of updates. 
             You will be deemed to have been made aware of, 
             will be subject to, and will be deemed to have 
             accepted the changes in any revised Cookie Policy 
             by your continued use of the Site after the date 
             such revised Cookie Policy is posted.
            </p>
            <p className='strong'><strong>Use of Cookies</strong></p>
            <p className='privacy-policy__paragraph'>
            A “cookie” is a string of information which assigns you 
            a unique identifier that we store on your computer. 
            Your browser then provides that unique identifier to use each 
            time you submit a query to the Site. We use cookies on the Site to, 
            among other things, keep track of services you have used, record registration 
            information, record your user preferences, keep you logged into the Site, 
            facilitate purchase procedures, and track the pages you visit. Cookies help us 
            understand how the Site is being used and improve your user experience.
            </p>
            <p className='strong'><strong>Other Tracking Technologies</strong></p>
            <p className='privacy-policy__paragraph'>
            In addition to cookies, we may use web beacons, pixel tags, and other 
            tracking technologies on the Site to help customize the Site and improve 
            your experience. A “web beacon” or “pixel tag” is tiny object or image embedded 
            in a web page or email. They are used to track the number of users who have 
            visited particular pages and viewed emails, and acquire other statistical data. 
            They collect only a limited set of data, such as a cookie number, time and date of 
            page or email view, and a description of the page or email on which they reside. 
            Web beacons and pixel tags cannot be declined. However, you can limit their use 
            by controlling the cookies that interact with them.
            </p>
            <p className='strong'><strong>Privacy Policy</strong></p>
            <p className='privacy-policy__paragraph'>
            For more information about how we use information collected by cookies and 
            other tracking technologies, please refer to our Privacy Policy. 
            This Cookie Policy is part of and is incorporated into our Privacy Policy. 
            By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.
            </p>
            <p className='strong'><strong>Contact us</strong></p>
            <p className='privacy-policy__paragraph'>
            We encourage you to send us questions and inquiries on this Policy. 
            Please send us an email at info@moguljon.com and we will respond to 
            all inquiries on the Policy within 14 days.
            </p>
        </div>
    )
}

export default Cookies;