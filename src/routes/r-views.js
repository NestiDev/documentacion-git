/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
    /* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
    res.render("pages/index", {
        title: "home",
    });
});

/* 
	______________________ config ______________________
*/
router.get("/config", (req, res) => {
    res.render("pages/config", {
        title: "config",
    });
});

/* 
	______________________ init ______________________
*/
router.get("/init", (req, res) => {
    res.render("pages/init", {
        title: "init",
    });
});

/* 
	______________________ add ______________________
*/
router.get("/add", (req, res) => {
    res.render("pages/add", {
        title: "add",
    });
});

/* 
	______________________ ignore ______________________
*/
router.get("/ignore", (req, res) => {
    res.render("pages/ignore", {
        title: "ignore",
    });
});

/* 
	______________________ commit ______________________
*/
router.get("/commit-save", (req, res) => {
    res.render("pages/commit-save", {
        title: "commit save",
    });
});

router.get("/commit-revert", (req, res) => {
    res.render("pages/commit-revert", {
        title: "commit revert",
    });
});

router.get("/commit-amend", (req, res) => {
    res.render("pages/commit-amend", {
        title: "commit amend",
    });
});

router.get("/commit-reset", (req, res) => {
    res.render("pages/commit-reset", {
        title: "commit reset",
    });
});

router.get("/commit-checkout", (req, res) => {
    res.render("pages/commit-checkout", {
        title: "commit checkout",
    });
});

/* 
	______________________ log ______________________
*/
router.get("/log", (req, res) => {
    res.render("pages/log", {
        title: "log",
    });
});

/* 
	______________________ brach ______________________
*/
router.get("/branch", (req, res) => {
    res.render("pages/branch", {
        title: "branch",
    });
});

/* 
	______________________ merge ______________________
*/
router.get("/merge-fusion", (req, res) => {
    res.render("pages/merge-fusion", {
        title: "merge fusion",
    });
});

router.get("/merge-conflicts", (req, res) => {
    res.render("pages/merge-conflicts", {
        title: "merge conflicts",
    });
});

/* 
	______________________ push ______________________
*/
router.get("/push-success", (req, res) => {
    res.render("pages/push-success", {
        title: "push success",
    });
});

router.get("/push-conflicts", (req, res) => {
    res.render("pages/push-conflicts", {
        title: "push conflicts",
    });
});

/* 
	______________________ clone ______________________
*/
router.get("/clone", (req, res) => {
    res.render("pages/clone", {
        title: "clone",
    });
});

/* 
	______________________ pull ______________________
*/
router.get("/pull", (req, res) => {
    res.render("pages/pull", {
        title: "pull",
    });
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
