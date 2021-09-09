const wrapper = document.querySelector(".wrapper");

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    }
}

const title = styled("h1")`
    background-color: teal;
    color:blue;
`;

const subTitle = styled("h3")`
    color: red;
`

title.innerText = "wow";
subTitle.innerText = "w";

wrapper.append(title);
wrapper.append(subTitle);