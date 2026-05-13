type BannerProps = {
    title: string;
};

export default function Banner({ title }: BannerProps) {
    return (
        <div className="bg-[url('/src/assets/jumbotron.jpg')] bg-cover bg-center">
            <div className="bg-black/60 w-full py-[50px]">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h4 className="text-white text-2xl font-bold">{title}</h4>
                </div>
            </div>
        </div >
    )
}
