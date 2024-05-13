import accessToken from '../assets/images/Access-Token.webp'

const AccessTokenDetails = () => {
	
    return (
        <div className="max-w-4xl mx-auto my-6 p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800">
	<article>
		<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">What is an access token and refresh token? How do they work and where should
we store them on the client side?</h2>
		<p className="mt-4 dark:text-gray-600">In this blog we will learn what is access token and refresh token? why we need these 2 types of token and where to store it.</p>
		<div className="flex items-center mt-8 space-x-4">
			<img src="https://lh3.googleusercontent.com/a/ACg8ocIHE_x1WXwqf6QXclnP92_gofzyaoyOGa0SvzLvAVs7iZmtRis=s96-c" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">Anas Ahammad Sarker</h3>
				<time dateTime="2021-02-18" className="text-sm dark:text-gray-600">May 13th 2024</time>
			</div>
		</div>
		<hr className="my-6" />

		<div>

			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">1. Introduction</h1>
			<h5 className="my-4 lg:text-xl ">We use <a className="text-blue-400" href="https://www.baeldung.com/cs/security-claims-based-authentication">tokens</a> to authenticate users and authorize requests without keeping <a className="text-blue-400" href="https://www.baeldung.com/cs/tokens-vs-sessions">session</a> data on the server. <span className="font-bold ">Tokens are data confirming a user’s identity and are analogous to digital signatures.</span>
			<br />

In this blog, we’ll clarify the distinction between access and refresh tokens and show how to implement them.</h5>

		</div>

		<div>
		<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">2. What Are Access and Refresh Tokens?</h1>

		<h5 className="my-4 lg:text-xl "><span className="font-bold">A careful balance between security and user experience is essential for</span> <a className="text-blue-400" href="https://www.baeldung.com/cs/authentication-vs-authorization">authentication and authorization</a>. A user may become irritated if protocols are overly strict. On the other hand, a security breach is imminent if permission systems are too loose.

Access and refresh tokens provide a solution that meets both requirements..</h5>
		</div>
		<div>
		<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">3. Access Tokens</h1>

		<h5 className="my-4 lg:text-xl "><span className="font-bold">An access token (from an authorization server) allows temporary access to restricted resources such as APIs or websites.</span> <br />	

Generally, <span className="font-bold">access tokens are valid for only a few minutes or hours</span>, depending on the setting to safeguard the resource server. They also include security features like signatures.<br />

Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious. Let’s check out an example:.</h5>

<img src={accessToken} alt="" />
<h5 className='my-4 text-xl'>In this case, the client application can access the user’s resource using an access token. The authorization server issues an access token following successful user authentication and consent. <br />

<span className='font-bold'>The chance of the access token being compromised or stolen increases the longer it’s valid</span>. While maintaining a positive user experience, pairing long-duration refresh tokens with short-duration access tokens improves security.</h5>
		</div>

		<div>
		<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">4. Refresh Tokens</h1>

		<h5 className="my-4 lg:text-xl "> In OAuth 2.0 authorization frameworks, refresh tokens allow developers to manage users’ sessions across native, web-based, and single-page apps. <br /> 	

Additionally, <span className='font-bold'>they allow users to log in and stay connected without providing their passwords for long periods</span>. Further, they add a layer of security for sensitive data, improving the user experience. <br />

Refresh tokens can last from a few days to a few months. <br />

Refresh tokens by themselves don’t grant the user any access. To avoid needless re-authentication, they prolong the duration of the session..</h5>
		</div>

		<div>
		<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">5. Where to store access token and refresh token on the client side?</h1>

		<h5 className="my-4 lg:text-xl ">
Storing access tokens and refresh tokens securely on the client side is crucial to prevent unauthorized access to sensitive information. Here are some recommended approaches:</h5>
	<ol className='list-disc'>
		<li className='lg:text-xl'><span className='font-bold lg:text-[22px]'> HTTP-Only Cookies:</span> Store the tokens in HTTP-only cookies. HTTP-only cookies cannot be accessed by JavaScript, which helps mitigate the risk of cross-site scripting (XSS) attacks. However, HTTP-only cookies are susceptible to Cross-Site Request Forgery (CSRF) attacks.</li>
		<li className='lg:text-xl'><span className='font-bold lg:text-[22px]'> Session Storage:</span> Use the <span className='font-semibold'>`sessionStorage`</span> API to store tokens. Session storage is isolated to the current browser tab and is cleared when the tab is closed. While this provides some level of security, tokens stored in session storage are still vulnerable to XSS attacks.</li>
		<li className='lg:text-xl'><span className='font-bold lg:text-[22px]'> Local Storage:</span> Avoid storing tokens in <span className='font-semibold'>`localStorage`</span>  as it is accessible to JavaScript and vulnerable to XSS attacks. However, if you must use local storage, encrypt the tokens before storing them and decrypt them when needed. Keep in mind that encrypted tokens can still be intercepted and decrypted by determined attackers.</li>

		<li className='lg:text-xl'><span className='font-bold lg:text-[22px]'> In-Memory Storage:</span> Store tokens in memory variables within your application. While this approach is more secure than storing tokens in local storage or session storage, it's important to note that tokens will be lost if the user refreshes the page or navigates away.</li>
	</ol>

	<h5 className='lg:text-xl my-6'>Ultimately, the best approach depends on your specific requirements and security considerations. Consider the sensitivity of the tokens, the risk of XSS and CSRF attacks, and the lifespan of the tokens when determining where to store them on the client side. Additionally, always use HTTPS to encrypt data transmitted between the client and server to protect against network-based attacks</h5>
		</div>
	</article>
</div>
    
    );
};

export default AccessTokenDetails;