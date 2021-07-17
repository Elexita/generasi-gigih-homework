import './style-link.css'

const Link =({ url, isExternal = false, children, ...props}) => {
    return(
        <a className="link" 
        href={url} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}>
                {children}
            </a>
    );
}

export default Link;