import React from 'react';
import './Privacy.scss';
import {Helmet} from "react-helmet";
import Logo2 from '../Logo2/Logo2';

const Privacy = () => {
    return(
        <div className='section-privacy'>
            <Logo2 />
             <Helmet>
                <title>Privacy Policy | Web Studios</title>
                <meta name="description" content='Privacy Policy that allows you to give you more information on Web Studios' />
            </Helmet>
            <h1 className='privacy-policy'>PRIVACY POLICY</h1>
            <p className='strong'><strong>UPDATED: Dec 31, 2020</strong></p>
            <p className='privacy-policy__paragraph'>
            Web Studios. (the “Company”, “we” or “us”), 
            uses our website and other internet-based tools to provide resources and services.

            This Privacy Policy governs the manner in which the Company collects, uses, 
            maintains and discloses information collected from users of www.webstudios.io 
            (the "Website") and web studios. 
            This Privacy Policy applies to the Website and all services offered by the website owner.

            This Policy should be read in conjunction with any Terms of Use or policies 
            available on the Website. If you have any questions about this Policy, please contact us 
            by sending an email with your questions through our booking page or info@moguljon.com 
            before accessing or entering any information on the Website.
            </p>
            <p className='strong'><strong>Personal identification information</strong></p>
            <p className='privacy-policy__paragraph'>
            We may collect personal identification information from users in a variety of ways, 
            including, but not limited to, when they visit our website or a service they want, subscribe to a newsletter, 
            and in connection with other activities, services, features, or resources we make available on our 
            Website. Students may visit the Website anonymously.
            We will collect personal identification information from users only if 
            they voluntarily submit such information to us. User can refuse to supply 
            personal identification information but doing so may prevent them from engaging in 
            any Website related activities.

            </p>
            <p className='strong'><strong>Additional data collected</strong></p>
            <p className='privacy-policy__paragraph'>
            To learn about your experience as a User and to make periodic improvements to the Website, 
            we may collect and retain certain information. 
            We will automatically record information about your activity on the Website and School. 
            This may include your Internet Protocol (IP) address, operating system, geolocation 
            information, locale preferences, identification numbers associated with your computers 
            and mobile devices, your mobile carrier, date and time stamps associated with transactions, 
            system configuration information, metadata, and other electronic interactions with the 
            Company and the Website.
            </p>
            <p className='privacy-policy__paragraph'>
            Cookies and Similar Technology: We may collect information about you through the 
            use of cookies and other similar technologies. 
            Cookies are pieces of data in the form of text files that your browser stores on 
            your hard drive and sends back to us when making requests, and similar technologies.
            </p>
            <p className='strong'><strong>How we use collected information</strong></p>
            <p className='privacy-policy__paragraph'>
            Web Studios may collect and use the user personal identification information 
            to improve customer service Information that you provide because it helps us
            respond to your customer service requests and support needs more efficiently.
            To personalize user experience, We may use your information
            to understand how our users use the services and resources provided
            on our Website. To send periodic emails
            We may use the user email address to send information and updates
            about their membership about the Website. Email addresses may also be
            used to respond to inquiries, questions,
            or other requests. Remarketing We may engage in "remarketing" activities using
            third-party services, which may include but are not limited to Google Ads,
            Google Analytics and Facebook. Using the Website,
            you consent to allow us to provide information, including the use of cookies,
            to third-party service parties who may present you with advertisements
            about the Company after you visit the Website. We will provide third-party
            providers of remarketing services with the minimum amount of information required
            to facilitate remarketing, and in no circumstances will Company provide any personal
            identifying information to third parties to remarket. For more
            information on our use of cookies and similar technologies, please refer to our
            Cookies Policy.
            </p>
            <p className='strong'><strong>Third-party applications</strong></p>
            <p className='privacy-policy__paragraph'>
            To provide an enhanced experience to Users, including to track conversions and analytics, 
            we may engage services and features controlled by third-parties. 
            We cannot control or dictate how any third-party application you 
            use in conjunction with the Website or School, now or at any point in the future, 
            will treat any personal information you transmit through their servers when using 
            the Website. We advise you to contact these parties directly to review their 
            privacy policies. Without limitation, the Company uses or may use the following 
            third-party applications and services in conjunction with the Website: Google Analytics, 
            MailerLite, Facebook. By using any of these third-party applications to interact with the 
            Website, we will not be given access to your login credentials, user name, password, 
            payment information, or any information you may provide directly to these applications.
            </p>
            <p className='strong'><strong>Sharing your personal information</strong></p>
            <p className='privacy-policy__paragraph'>
            We do not sell, trade, or rent your personal identification information to others. 
            In certain situations, we may be required to disclose personal data in response to 
            lawful requests by public authorities, including to meet national security or 
            law enforcement requirements. We may disclose your personal information to third parties: 
            In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.
            If the Company or its assets are acquired by a third party, in which case personal 
            data about Users may be one of the transferred assets. If we are under a duty to 
            disclose or share your personal data in order to comply with any legal obligation, 
            or in order to enforce or apply our Terms of Use; or to protect the rights, property, 
            or safety of the Company, our Users, or others. This includes exchanging information 
            with other companies and organizations for the purposes of fraud protection and credit 
            risk reduction.
            </p>
            <p className='strong'><strong>Third-party websites</strong></p>
            <p className='privacy-policy__paragraph'>
            Student may find advertising or other content in our website hat link to the websites 
            and services of our partners, suppliers, advertisers, sponsors, licensors and other 
            third parties. We do not control the content or links that appear on these websites 
            and are not responsible for the practices employed by websites linked to or from our 
            Website. In addition, these websites or services, including their content and 
            links, may be constantly changing. These websites and services may have their own 
            privacy policies and customer service policies. Browsing and interaction on any other 
            website, including websites which have a link to our Users, is subject to that website's 
            own terms and policies.
            </p>
            <p className='strong'><strong>Your acceptance of these terms</strong></p>
            <p className='privacy-policy__paragraph'>
            By using or submitting any information through the Website
            you signify your acceptance of this Privacy Policy. 
            You are prohibited from accessing or using the Website 
            you fully understand and agree to this Policy and all Terms of Use available 
            for review on the Website. 
            Your continued use of the Website following the posting of changes to this Privacy Policy 
            will be deemed your acceptance of those changes.
            </p>
            <p className='strong'><strong>Contact us</strong></p>
            <p className='privacy-policy__paragraph'>
            We encourage you to send us questions and inquiries on this Policy. 
            Please send us an email at our booking page or at info@moguljon.com 
            and we will respond to all inquiries on the Policy within 14 days.
            </p>
        </div>
    )
}

export default Privacy;