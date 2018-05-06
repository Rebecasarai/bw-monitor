<template>
  <v-content>
      <section>
        <v-parallax src="http://braillewriter.es/wp-content/uploads/2017/11/reading.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="http://braillewriter.es/wp-content/uploads/2017/11/logo-bw-hd-fondo-transparente.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">La app para lograr un futuro incluyente e integrado</h1>
            <div class="subheading mb-3 text-xs-center">Braille Writer</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="#contact"
            >
              Contactanos
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Tan sólo sosteniendo el móvil las personas invidentes escuchan, acceden y gestionan la información del mundo que le rodea.</h2>
              <span class="subheading">
                Fácil y en español
              </span>
            </div>
          </v-flex>

          
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Reconoce texto en el entorno</div>
                    </v-card-title>
                    <v-card-text>
                      Escucha y lee texto, a través de la cámara. Lee cartas, facturas, informes médicos o documentos enteros.  
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Gestiona la información</div>
                    </v-card-title>
                    <v-card-text>
                      Además de leer en altavoz texto no braille, puedes convertirlo en documentos digitales e incluso imprimirlo en Braille.  
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Compártelo</div>
                    </v-card-title>
                    <v-card-text>
                      Tus archivos, datos u otros medios, ¡compártelos fácilmente! 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Felices de ayudar a través de la tecnología</div>
            <em>¿Quieres más información?</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Ve nuestra web principal
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section id="contact">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Braille Writer</div>
                </v-card-title>
                <v-card-text>
                  ¿Estás interesado en colaborar con el proyecto? <br/>
                  ¿Quiere saber más al respecto? Contactenos a través de un correo con su mensaje o por telefono.<br/>

Le contestaremos lo más pronto posible. <br/>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contactanos</div>
                </v-card-title>
                <v-card-text>
                  

                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+34 648 50 64 99</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Sevilla Capital, España</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>info@braillewriter.es</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Hecho con
              <v-icon class="red--text">favorite</v-icon>
             
              Braille Writer 2017
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
</template>

<script>
export default {}
</script>
