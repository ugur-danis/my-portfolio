export type TPageTitleProps = {
    title: string;
};

export const PageTitle: React.FC<TPageTitleProps> = ({ title }) => {
    return <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">
        {title}
    </h2>;
};