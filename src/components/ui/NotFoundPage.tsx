'use client';

import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { Card } from './Card';

interface NotFoundPageProps {
    errorCode: string;
    title: string;
    description: string;
    backHome: string;
}

export default function NotFoundPage({
    errorCode,
    title,
    description,
    backHome
}: NotFoundPageProps) {
    const router = useRouter();

    const handleBackHome = () => {
        router.push('/');
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <Card className="w-full max-w-md text-center space-y-6 p-8 relative">
                {/* 404 Error Code */}
                <div className="space-y-2">
                    <h1 className="text-8xl font-bold text-primary/20 tracking-wider">
                        {errorCode}
                    </h1>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                        {title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <Button
                        onClick={handleBackHome}
                        className="w-full sm:w-auto"
                        size="lg"
                    >
                        {backHome}
                    </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 border-2 border-primary/20 rounded-full opacity-50"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border border-primary/20 rounded-full opacity-50"></div>
            </Card>
        </div>
    );
} 