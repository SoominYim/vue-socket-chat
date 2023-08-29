export default {
    install: (app) => {
        app.directive("auto-scroll-bottom", {
            updated: (el) => {
                el.scrollTop = el.scrollHeight;
            },
        });
    },
};
