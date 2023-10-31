import { FaFacebookF, FaWhatsapp, FaTwitter, FaGithub, FaInstagram, FaSnapchat } from "react-icons/fa";

const Profile = () => {
    return (
        <div >
            <div className=" flex mt-10 flex-col text-gray-700 bg-pink-400 shadow-md w-80 mx-auto rounded-xl bg-clip-border">
                <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-teal-600 shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="p-16" src="/public/nezuko-modified.png" alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Elara Mustarin Nisa
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-red-950 bg-clip-text">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex justify-center items-center p-6 pt-2 gap-3">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGithub />
                    <FaInstagram />
                    <FaSnapchat />
                    <FaWhatsapp />


                </div>
            </div>
        </div>

    );
};

export default Profile;