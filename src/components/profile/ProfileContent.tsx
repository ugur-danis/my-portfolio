import Typewriter from 'typewriter-effect';
import { TranslationFunction } from "@/types";
import { SocialMediaLinks } from "./SocialMedia";
import Image from "next/image";

interface ProfileContentProps {
    t: TranslationFunction;
    typewriterStrings?: string[];
}

export const ProfileContent = ({
    t,
    typewriterStrings = [t('title'), 'Mobile Developer', 'Web Developer']
}: ProfileContentProps) => (
    <div className="flex flex-col items-center mt-4 md:mt-16 lg:mt-20 flex-1">

        <div className='flex flex-row items-center justify-center'>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 mb-2 md:hidden">
                <Image
                    priority={true}
                    width={144}
                    height={144}
                    src={"/avatar.png"}
                    alt={"Profile"}
                    className="w-full h-full object-cover rounded-sm"
                />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
                {t('name')}
            </h1>

        </div>
        <div className="text-sm lg:text-base text-center">
            <Typewriter
                options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                }}
            />
        </div>

        <p className="text-xs lg:text-sm text-muted-foreground text-center mt-2 px-12 leading-relaxed hidden md:block">
            {t('description')}
        </p>

        <SocialMediaLinks />
    </div>
); 