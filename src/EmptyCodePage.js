import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const EmptyCodePage = () => {
    const [generatedCode, setGeneratedCode] = useState("");
    const [name, setName] = useState("");
    const [emails, setEmails] = useState("");
    const [message, setMessage] = useState("");

    const generateCode = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        setGeneratedCode(result);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode).then(() => {
            alert("Code copied to clipboard!");
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };

    const sendEmails = () => {
        const emailList = emails.split(',').map(email => email.trim());
        const isValidEmails = emailList.every(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

        if (!isValidEmails) {
            alert("Please enter valid email addresses separated by commas.");
            return;
        }

        const templateParams = {
            name,
            emails: emailList.join(', '),
            generatedCode,
        };

        emailjs.send('service_x97rz7s', 'template_gl8h06s', templateParams, '41nuQ9Y1Ufb2JEoZo')
            .then(() => {
                setMessage("Emails sent successfully!");
            }, (error) => {
                setMessage(`Failed to send emails: ${error.text}`);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Generate your room code</h1>
            <p className="text-xl md:text-2xl mb-8">Invite others to join by sending them emails with your room code</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name in emails"
                className="py-2 px-4 rounded mb-4 outline-0 text-black"
            />
            <textarea
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Enter recipient emails, separated by commas"
                className="py-2 px-4 rounded mb-4 outline-0 text-black w-full"
                rows="3"
            />
            <button
                onClick={generateCode}
                className="bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold rounded-full py-[5px] md:py-[7px] px-4 md:px-6 text-white mb-4"
            >
                Generate Code
            </button>
            {generatedCode && (
                <div className="flex flex-col items-center mb-8">
                    <p className="text-2xl font-mono">{generatedCode}</p>
                    <button
                        onClick={copyToClipboard}
                        className="bg-green-500 hover:bg-green-400 duration-100 ease-out font-bold rounded-full py-[5px] md:py-[7px] px-4 md:px-6 text-white mt-4"
                    >
                        Copy Code
                    </button>
                </div>
            )}
            {generatedCode && (
                <button
                    onClick={sendEmails}
                    className="bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold rounded-full py-[5px] md:py-[7px] px-4 md:px-6 text-white mb-4"
                >
                    Send Code via Email
                </button>
            )}
            {message && <p className="text-lg mt-4 text-green-600">{message}</p>}
            <Link to="/" className="text-blue-500 underline">Go Back to Home</Link>
        </div>
    );
};

export default EmptyCodePage;
