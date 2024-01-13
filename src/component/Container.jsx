const Container = ({ children }) => {
    return (
        <div className='min-h-screen flex-col flex items-center'>
            <div className='max-w-3xl w-full pt-5'>
                {children}
            </div>
        </div>
    )
}

export default Container