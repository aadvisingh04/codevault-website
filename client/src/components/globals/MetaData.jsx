import Helmet from "react-helmet";
const getPageMetadata = (path) => {
    const metadata = {
        "about": {
            title: "About",
            description: "Empowering Coders and Developers Worldwide",
        },
        "contests": {
            title: "Contests",
            description:
                "Discover upcoming coding contests on CodeVault and stay in the loop with the latest challenges. Join us, take part, and put your coding skills to the test!",
        },
        "challenges": {
            title: "Challenges",
            description:
                "Discover upcoming coding challenges on CodeVault and stay in the loop with the latest contests. Join us, take part, and put your coding skills to the test!",
        },
        "hackathons": {
            title: "Hackathons",
            description: 
                "Discover Hackathons on CodeVault and stay in the loop with the latest hackathons. Join us, take part, and put your coding skills to the test!",
        },
        "contact": {
            title: "Contact Us",
            description: "Get in touch with us.",
        },
        "login": {
            title: "Login",
            description: "Log in to your CodeVault account.",
        },
        "logout": {
            title: "Logout",
            description: "Log out from your CodeVault account.",
        },
        "signup": {
            title: "Sign Up",
            description: "Create a new account on CodeVault.",
        },
        "updates": {
            title: "Updates",
            description: "Stay updated with the latest news and developments from CodeVault.",
        },
        "home": {
            title: "Home",
            description: "Empowering Coders and Developers Worldwide",
        },
        "feedback": {
            title: "Feedback",
            description: "Provide your valuable feedback to CodeVault.",
        },
        "discord": {
            title: "Discord Redirect",
            description: "Redirecting to CodeVault's Discord channel.",
        },
        "404": {
            title: "Error 404",
            description: "Page not found. Error 404.",
        },
        "u/leaderboard": {
            title: "Leaderboard",
            description: "Check the leaderboard for top performers on CodeVault.",
        },
        "u/dashboard": {
            title: "Dashboard",
            description: "Check the leaderboard for top performers on CodeVault.",
        },
        "u/dashboard/account": {
            title: "Account",
            description: "",
        },
        "u/dashboard/profile": {
            title: "Profile",
            description: "",
        },
        "u/dashboard/ratings": {
            title: "Ratings",
            description: "",
        },
        "u/dashboard/settings": {
            title: "Settings",
            description: "",
        },
        "u/dashboard/career": {
            title: "Career",
            description: "",
        },
        "u/dashboard/preferences": {
            title: "Preferences",
            description: "",
        },
        "u/dashboard/widgets": {
            title: "Widgets",
            description: "Get your own customized widgets",
        },
        "u/dashboard/github": {
            title: "Github",
            description: "Check the leaderboard for top performers on CodeVault.",
        },
        "null": {
            title: "",
            description: "",
        },
    };

    const { title, description } = metadata[path] || metadata["404"];
    const keywords = description.split(" ");
    keywords.push("codechef", "codeforces", "leetcode", "atcoder", "hackerrank", "hackerearth", "topcoder", "kaggle", "CodeVault", "CodeVault.com", "CodeVault contests", "CodeVault challenges", "CodeVault hackathons", "CodeVault internships", "CodeVault jobs", "CodeVault updates", "CodeVault feedback", "CodeVault contact", "CodeVault about", "CodeVault discord", "CodeVault 404", "CodeVault leaderboard");

    keywords.push("algorithm", "data structure", "binary search", "sorting", "searching", "dynamic programming", "greedy", "graph", "tree", "heap", "queue", "stack", "linked list", "hashing", "recursion", "backtracking", "bit manipulation", "segment tree", "fenwick tree", "disjoint set", "competitive programming", "code jam", "kick start", "google code jam", "facebook hacker cup", "acm icpc", "online judge", "competitive coding", "contest", "codeforces round", "leetcode contest", "atcoder contest", "hackerrank challenge", "hackerearth challenge", "topcoder open");
    // const image = "https://res.cloudinary.com/dsazw0r59/image/upload/c_fit,q_100,w_250/v1693023476/logo_bg_y5ixum.jpg";
    const image = "";

    return {
        title: `${title} | CodeVault`,
        description,
        keywords,
        image,
        url: `https://CodeVault.com/${path}`,
    };
};


const MetaData = ({ path = "null" }) => {
    // console.log(getPageMetadata(path).keywords);
    return (
        <>
            <Helmet>
                <title>{getPageMetadata(path).title}</title>

                {/* Page Description */}
                <meta name="description" content={getPageMetadata(path).description} />

                {/* Keywords */}
                <meta name="keywords" content={getPageMetadata(path).keywords.join(", ")} />

                {/* Robots Meta Tag */}
                <meta name="robots" content="index, follow" />

                {/* Open Graph Tags (Facebook) */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={getPageMetadata(path).url} />
                <meta property="og:title" content={getPageMetadata(path).title} />
                <meta property="og:description" content={getPageMetadata(path).description} />
                <meta property="og:image" content={getPageMetadata(path).image} />
                <meta property="og:url" content={getPageMetadata(path).url} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content={getPageMetadata(path).title} />
                <meta name="twitter:description" content={getPageMetadata(path).description} />
                <meta name="twitter:image" content={getPageMetadata(path).image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CodeVault" />
                <meta name="twitter:creator" content="@CodeVault" />

                {/* Canonical URL */}
                <link rel="canonical" href={getPageMetadata(path).url} />
            </Helmet>

        </>
    );
};

export default MetaData;