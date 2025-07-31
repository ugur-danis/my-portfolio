export const Container = ({ children }: { children: React.ReactNode; }) => {
    return <div className="space-y-6 sm:space-y-8 p-3 sm:p-4 lg:p-6 max-w-6xl mx-auto">{children}</div>;
};