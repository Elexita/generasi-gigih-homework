import '../App.css'

export default function Link ({to: url, isExternal = false, children}){
    return(
        <a className="App-link"
            href={url}
            target={isExternal ? "_blank" : undefined} 
            rel={isExternal ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
    );
}