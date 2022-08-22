<template>
    <v-row class="signin">
      <v-col >
        <v-container>
          <h2>Iniciar sesión</h2>
          <div class="probando">
             <v-col sm ="8">
              <p class="prob">Nombre de usuario o correo electrónico</p>
                <v-text-field 
                  placeholder="Nombre de usuario o correo electrónico"
                  filled
              ></v-text-field>
              <p class="prob">Contraseña</p>
              <v-text-field
                  placeholder="Contraseña"
                  filled
              ></v-text-field>
             </v-col>
          </div>
          <v-form @submit.prevent="submit">
            <div class="text-center">
              <v-btn class="signin-btn" type="submit" rounded color="#B3CB7E" dark>
                Acceder
              </v-btn>
            </div>
          </v-form>
          <br>
            <router-link to="/">¿Olvidaste tu contraseña?</router-link> 
        </v-container>
      </v-col>
      <v-col cols="4" class="left">
     
      </v-col>
    </v-row>
  
</template>

<style>
.probando{
  padding-left:25%;
}
.prob{
  text-align: left;
}
  .signin {
    padding: 0;
    margin: 0 auto;
    height:100vh;
    box-shadow: 0 0 1px 1px rgba(color = #000000, alpha= 0.1)
  }
    .left {
      padding: 30px;
      
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      background: #7ABCD6;
      color: #fff;
    }
    .right {
      padding: 30px;
    
      box-sizing: border-box;
      color: #30ac7c;
      background-color: #f9f9f9;
      }
      h2 {
        text-align: center;
        margin: 30px 0;
      }
      .signin-btn {
        width: 30%;
        color: #30ac7c;
      }
      .input-group--text-field {
        padding-left:-10%;
      }
.input-group--text-field label {
  left: -15%;
}

</style>
