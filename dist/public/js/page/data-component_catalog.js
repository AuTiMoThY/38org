
const data = [
    {
        name: "typography",
        link: "typography",
        child: {}
    },
    {
        name: "buttons",
        link: "buttons",
        child: {}
    },
    {
        name: "arrow",
        link: "arrow",
        child: {}
    },
    {
        name: "input/textarea",
        link: "input",
        child: {}
    },
    {
        name: "select",
        link: "select",
        child: {}
    },
    {
        name: "radio/checkbox",
        link: "rcx",
        child: {}
    }
];


const app = {
    data() {
        return {
            list: data
        }
    }
}

const componentCatalog = Vue.createApp(app).mount("#componentCatalog");
