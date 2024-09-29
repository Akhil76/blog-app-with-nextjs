

export default function AdminLayout({ children }) {

    return (
        <div className="">
            <main>
                <div className="">
                    {children}
                </div>
            </main>
        </div>
    );
}