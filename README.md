<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="estilos.css" />
    <title>Document</title>
</head>
<body class="side-header" data-bs-spy="scroll" data-bs-target="#header-nav" data-bs-offset="1">

  <div id="main-wrapper">

    <header id="header" class="sticky-top">
      
      <nav class="primary-menu navbar navbar-expand-lg bg-dark navbar-text-light border-bottom-0">
        <div class="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
  
         
          <a href="index.html" class="mb-lg-auto mt-lg-4">
              <span class="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                  <img id="fotoDePerfil" class="img-fluid rounded-pill d-block"  alt="Foto de Perfil">
              </span>
              <h1 class="text-5 text-white text-center mb-0 d-lg-block nombre"></h1>
          </a>
          
  
          <div id="header-nav" class="collapse navbar-collapse w-100 my-lg-auto">
            <ul class="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li class="nav-item"><a class="nav-link smooth-scroll active" href="#Inicio">Inicio</a></li>
              <li class="nav-item"><a class="nav-link smooth-scroll" href="#SobreMi">Sobre mí</a></li>
              <li class="nav-item"><a class="nav-link smooth-scroll" href="#Experiencia">Experiencia</a></li>
              <li class="nav-item"><a class="nav-link smooth-scroll" href="#Habilidades">Habilidades</a></li>
              <li class="nav-item"><a class="nav-link smooth-scroll" href="#Contacto">Contacto</a></li>
            </ul>
          </div>
          <ul class="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            
            <li class="social-icons-linkedin"><a data-bs-toggle="tooltip" title="Linkedin" data-bs-placement="top" href="https://www.linkedin.com/usuario" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li class="social-icons-github"><a data-bs-toggle="tooltip" title="GitHub" data-bs-placement="top" href="https://github.com/usuario" target="_blank" ><i class="fab fa-github"></i></a></li>
            <li class="social-icons-email"><a data-bs-toggle="tooltip" title="Email" data-bs-placement="top" class="mail" target="_blank" ><i class="fas fa-envelope"></i></a></li>
          </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>
        </div>
      </nav>
      
    </header>

    <div id="content" role="main">
  

      <section id="Inicio">
        <div class="hero-wrap">
          <div class="hero-mask opacity-8 bg-dark"></div>
          <div class="hero-bg parallax" style="background-image:url('assets/20210402_133519.jpg');"></div>
  
          <div class="hero-content section d-flex fullscreen">
            <div class="container my-auto">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="typed-strings">
                    <p>¡Bienvenidos!</p>
               
                  </div>
                  <p class="text-7 fw-500 text-white mb-2 mb-md-3 nombre"></p>
                  <h2 class="text-16 fw-600 text-white mb-2 mb-md-3"><span class="typed"></span></h2>
                  <p id="ubicacion" class="text-5 text-light mb-4"></p>
                          <a href="#Contacto" class="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2">Contactame</a>
                </div>
              </div>
            </div>
            <a href="#SobreMi" class="scroll-down-arrow text-white smooth-scroll"><span class="animated"><i class="fa fa-chevron-down"></i></span></a> </div>
        </div>
      </section>

      <section id="SobreMi" class="section bg-dark-1">
          <div class="container px-lg-5">
            
            <div class="position-relative d-flex text-center mb-5">
              <h2 class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0">¿Quién Soy?</h2>
              <p class="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">Sobre Mí<span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> </p>
            </div>
            
    
            <div class="row gy-5">
              <div class="col-lg-7 col-xl-8 text-center text-lg-start">
                <h2 class="text-7 text-white fw-600 mb-3">Soy <span class="text-primary nombre"></span>, software developer.</h2>
                <p class="text-white-50">Esto es un párrafo que contiene información personal a modo de presentación, tales como lugares de estudio, lugar de trabajo actual, o lo que sea, loren ipsum</p>
                <p class="text-white-50">Esto es un párrafo que contiene información personal a modo de presentación, tales como lugares de estudio, lugar de trabajo actual, o lo que sea, loren ipsum</p>
              </div>
              <div class="col-lg-5 col-xl-4">
                <div class="ps-lg-4">
                  <ul class="list-style-2 list-style-light text-light">
                    <li><span class="fw-600 me-2">Nombre:</span><span class="nombre"></span></li>
                    <li><span class="fw-600 me-2 ">Email:</span><a class="mail mailTexto"></a></li>
                    <li><span class="fw-600 me-2">Especialidad:</span>Full Stack Web Developer</li>
                    <li class="border-0"><span class="fw-600 me-2">Idiomas:</span>Español, Inglés, Alemán.</li>
                  </ul>
                  <a href="linkdeDescarga.pdf" class="btn btn-primary rounded-pill">Descargar CV</a> </div>
              </div>
            </div>
            <div class="brands-grid separator-border separator-border-light mt-5">
              <div class="row">
                <div class="col-6 col-md-4">
                  <div class="featured-box text-center">
                    <h4 class="text-12 text-white-50 mb-0"><span class="counter" data-from="0" data-to="6">6</span>+</h4>
                    <p class="text-light mb-0">Años de Experiencia</p>
                  </div>
                </div>
                <div class="col-6 col-md-4">
                  <div class="featured-box text-center">
                    <h4 class="text-12 text-white-50 mb-0"><span class="counter" data-from="0" data-to="51">51</span>+</h4>
                    <p class="text-light mb-0">Proyectos</p>
                  </div>
                </div>
                <div class="col-6 col-md-4">
                  <div class="featured-box text-center">
                    <h4 class="text-12 text-white-50 mb-0"><span class="counter" data-from="0" data-to="10">10</span>+</h4>
                    <p class="text-light mb-0">Reconocimientos</p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </section>
   
    
     
    
    
        <section id="Experiencia" class="section bg-dark-2">
          <div class="container px-lg-5">
           
            <div class="position-relative d-flex text-center mb-5">
              <h2 class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0">Experiencia</h2>
              <p class="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">CV<span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> </p>
            </div>
            
    
            <div class="row gx-5">
              <div class="col-md-6">
                <div class="bg-dark rounded p-4 mb-4">
                  <p class="badge bg-danger text-2 fw-400">2021 - Actualidad</p>
                  <h3 class="text-5 text-white">Full Stack Web Developer</h3>
                  <p class="text-primary">Netflix, Inc.</p>
                  <p class="text-white-50 mb-0">Python, MongoDB, React</p>
                </div>
                <div class="bg-dark rounded p-4 mb-4">
                    <p class="badge bg-danger text-2 fw-400">2019 - 2020</p>
                    <h3 class="text-5 text-white"> Desarrollador Back-end</a></h3>
                    <p class="text-primary">Google, LLC.</p>
                    <p class="text-white-50 mb-0">C#, Visual Basic, MySQL</p>
                  </div>
              </div>
              <div class="col-md-6">
                <div class="bg-dark rounded p-4 mb-4">
                  <p class="badge bg-danger text-2 fw-400">2020 - 2021</p>
                  <h3 class="text-5 text-white">Full Stack Developer</h3>
                  <p class="text-primary">Space Exploration Technologies Corp.</p>
                  <p class="text-white-50 mb-0">PHP, JQuery, SQLServer</p>
                </div>
                <div class="bg-dark rounded p-4 mb-4">
                  <p class="badge bg-danger text-2 fw-400">2018 - 2019</p>
                  <h3 class="text-5 text-white">Desarrollador Front-End</h3>
                  <p class="text-primary">Amazon.com, Inc.</p>
                  <p class="text-white-50 mb-0">JavaScript, Vue, Bootstrap</p>
                </div>
              </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <a href="" class="btn btn-primary rounded-pill">Descargar CV</a> </div>
                </div>
            </div>
          </div>
        </section>

      <section id="Habilidades" class="section bg-dark-1">
          <div class="container px-lg-5">
            
            <div class="position-relative d-flex text-center mb-5">
              <h2 class="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0">Habilidades</h2>
              <p class="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">Habilidades<span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> </p>
            </div>
          
    
            <div class="row gx-5">
              <div class="col-md-6">
                <p class="text-white fw-500 text-start mb-2">Python <span class="float-end">30%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-white fw-500 text-start mb-2">Bases de datos <span class="float-end">25%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-white fw-500 text-start mb-2">JavaScript <span class="float-end">30%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-6">
                <p class="text-white fw-500 text-start mb-2">Flutter <span class="float-end">60%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-white fw-500 text-start mb-2">JAVA <span class="float-end">35%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-white fw-500 text-start mb-2">Dart <span class="float-end">60%</span></p>
                <div class="progress progress-sm mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Contacto" class="section bg-dark-2">
          <div class="container px-lg-5">
            
            <div class="position-relative d-flex text-center mb-5">
              <h2 class="text-24 text-white-50 opacity-1 text-uppercase fw-600 w-100 mb-0">Contacto</h2>
              <p class="text-9 text-white fw-600 position-absolute w-100 align-self-center lh-base mb-0">Escribime!<span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> </p>
            </div>
           
            <div class="row gy-5">
              <div class="col-md-8 offset-md-2 col-xl-10 offset-xl-1 order-0 order-md-1">
                <h2 class="mb-3 text-5 text-white text-uppercase text-center text-md-start">Envia tu consulta</h2>
                <div id="form-messages"></div>
                <form id="contact-form" class="form-dark" action="contact/process-form.php" method="post">
                  <div class="row g-4">
                    <div class="col-xl-6">
                        <input name="name" id="name" type="text" class="form-control" required placeholder="Nombre y Apellido">
                    </div>
                    <div class="col-xl-6">
                        <input name="email" id="email" type="email" class="form-control" required placeholder="Email">
                    </div>
                    <div class="col">
                      <textarea name="message" id="message" class="form-control" rows="5" required placeholder="Escribime tu consulta..."></textarea>
                    </div>
                  </div>
                  <p class="text-center mt-4 mb-0">
                    <button id="submit-btn" class="btn btn-primary rounded-pill d-inline-flex g-recaptcha" type="submit">Enviar Mensaje</button>
                    <div id="recaptcha" style="display:none;">Error al enviar el mail. El Captcha no es válido. Vuelve a intentarlo</div>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      
    
      </div>

      <footer id="footer" class="section footer-text-light bg-dark-1">
        <div class="container px-lg-5">
          <div class="row">
            <div class="col-lg-9 text-center ">
              <p class="mb-3 mb-lg-0">Copyright &copy; <span class="year"></span> <a href="#" class="fw-500 nombre"></a>. Todos los derechos reservados.</p>
            </div>
            <div class="col-lg-6">
            </div>
          </div>
        </div>
      </footer>

    
    </div>

    <a id="back-to-top" class="rounded-circle" data-bs-toggle="tooltip" title="Ir al inicio" href="javascript:void(0)"><i class="fa fa-chevron-up"></i></a>
    
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <script src="main.js"></script>
    <script src="theme.js"></script>
    <script src="funciones.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
