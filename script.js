document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // MENÚ MÓVIL
    // ==============================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const abierto = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                abierto ? "true" : "false"
            );

        });

    }



    // ==============================
    // DROPDOWN GRUPO DELTA
    // ==============================

    const dropdown = document.getElementById("groupDropdown");

    const dropdownToggle = dropdown
        ? dropdown.querySelector(".dropdown-toggle")
        : null;


    if (dropdown && dropdownToggle) {


        dropdownToggle.addEventListener("click", (e)=>{

            e.preventDefault();
            e.stopPropagation();

            const abierto = dropdown.classList.toggle("open");

            dropdownToggle.setAttribute(
                "aria-expanded",
                abierto ? "true" : "false"
            );

        });


        document.addEventListener("click",(e)=>{

            if(!dropdown.contains(e.target)){

                dropdown.classList.remove("open");

                dropdownToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }



    // ==============================
    // CERRAR MENÚ AL NAVEGAR
    // ==============================


    document.querySelectorAll("#mainNav a")
    .forEach(link=>{

        link.addEventListener("click",()=>{

            if(window.innerWidth <= 1020 && mainNav){

                mainNav.classList.remove("open");

                if(menuToggle){

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        });

    });



    // ==============================
    // ANIMACIONES REVEAL
    // ==============================


    const elementosReveal =
        document.querySelectorAll(".reveal");


    if(elementosReveal.length){


        const observer = new IntersectionObserver(
            (entradas)=>{


                entradas.forEach(entrada=>{


                    if(entrada.isIntersecting){

                        entrada.target.classList.add("visible");

                    }


                });


            },
            {
                threshold:0.15
            }

        );


        elementosReveal.forEach(elemento=>{

            observer.observe(elemento);

        });


        // SEGURIDAD:
        // si después de 1 segundo algo quedó oculto,
        // lo mostramos igual

        setTimeout(()=>{

            elementosReveal.forEach(elemento=>{

                elemento.classList.add("visible");

            });

        },1000);


    }



    // ==============================
    // AJUSTE AL CAMBIAR TAMAÑO
    // ==============================


    window.addEventListener("resize",()=>{


        if(window.innerWidth > 1020 && mainNav){

            mainNav.classList.remove("open");

            if(menuToggle){

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }


    });


});
