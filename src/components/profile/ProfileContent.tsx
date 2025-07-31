import Typewriter from 'typewriter-effect';
import { TranslationFunction } from "@/types";
import { SocialMediaLinks } from "./SocialMedia";

interface ProfileContentProps {
    t: TranslationFunction;
    typewriterStrings?: string[];
}

export const ProfileContent = ({ 
    t, 
    typewriterStrings = [t('title'), 'Mobile Developer', 'Web Developer'] 
}: ProfileContentProps) => (
    <div className="flex flex-col items-center mt-16 lg:mt-20 flex-1">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
            {t('name')}
        </h1>

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

        <p className="text-xs lg:text-sm text-muted-foreground text-center mt-2 px-4 leading-relaxed">
            {t('description')}
        </p>

        <SocialMediaLinks />
    </div>
); 