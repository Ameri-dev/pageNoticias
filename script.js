const acordeon = document.getElementById("divAcordeon1");
        const link = document.getElementById("divLink1");
        const flecha = document.getElementById("flecha");
        acordeon.addEventListener("click", () => {
            if (link.style.display !== "none") {
                link.style.display = "none"
                flecha.style.rotate = "-180deg"
                flecha.style.transition = "all 0.5s"
                acordeon.style.borderRadius = "15px"


            } else {
                link.style.display = "flex"
                flecha.style.rotate = "0deg"
                flecha.style.translate = "0px"
                acordeon.style.borderRadius = "15px 15px 0px 0px"

            }

        })

        const acordeon2 = document.getElementById("divAcordeon2");
        const link2 = document.getElementById("divLink2");
        const flecha2 = document.getElementById("flecha2");
        acordeon2.addEventListener("click", () => {
            if (link2.style.display !== "none") {
                link2.style.display = "none"
                flecha2.style.rotate = "-180deg"
                flecha2.style.transition = "all 0.5s"
                acordeon2.style.borderRadius = "15px"

            } else {
                link2.style.display = "flex"
                flecha2.style.rotate = "0deg"
                flecha2.style.translate = "0px"
                acordeon2.style.borderRadius = "15px 15px 0px 0px"

            }
        })

        const acordeon3 = document.getElementById("divAcordeon3");
        const link3 = document.getElementById("divLink3");
        const flecha3 = document.getElementById("flecha3");
        acordeon3.addEventListener("click", () => {
            if (link3.style.display !== "none") {
                link3.style.display = "none"
                flecha3.style.rotate = "-180deg"
                flecha3.style.transition = "all 0.5s"
                acordeon3.style.borderRadius = "15px"

            } else {
                link3.style.display = "flex"
                flecha3.style.rotate = "0deg"
                flecha3.style.translate = "0px"
                acordeon3.style.borderRadius = "15px 15px 0px 0px"

            }
        })

