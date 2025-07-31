import Image from "next/image";

interface ProfileVideoProps {
    videoSrc?: string;
    avatarSrc?: string;
    avatarAlt?: string;
}

export const ProfileVideo = ({ 
    videoSrc = "video.mp4", 
    avatarSrc = "/avatar.png", 
    avatarAlt = "Profile" 
}: ProfileVideoProps) => (
    <div className="h-48 sm:h-56 md:h-64 lg:h-1/2 relative">
        <video
            className="profile-video w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-15 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36">
                <Image
                    priority={true}
                    width={144}
                    height={144}
                    src={avatarSrc}
                    alt={avatarAlt}
                    className="w-full h-full object-cover rounded-xl shadow-md shadow-[#547200]"
                />
            </div>
        </div>
    </div>
); 