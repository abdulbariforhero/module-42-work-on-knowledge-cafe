const Header = () => {
    return (
        <div className="container mx-auto mt-4">
            <nav className="flex flex-col md:flex-row justify-between items-center mb-7">
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <figure>
                    <img src="../../../../public/images/profile.png" alt="" />
                </figure>
            </nav>
            <hr />

        </div>
    );
};

export default Header;