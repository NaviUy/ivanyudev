import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'

export function getIcon(icon){
    switch(icon){
        case "faGithub":
            return (faGithub);
        case "faNpm":
            return(faNpm)
        default:
            return
    }
}
