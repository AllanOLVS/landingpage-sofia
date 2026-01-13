interface FooterProps {
    message?: string;
}

const Footer = ({ message = "Feito com todo amor do mundo ❤️" }: FooterProps) => {
    return (
        <footer className="py-6 text-center text-rose-300 text-sm">
            {message}
        </footer>
    );
};

export default Footer;
