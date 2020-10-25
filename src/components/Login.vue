<template>

<div>
   <b-col v-if="login==true" sm="12" class="container" >
      <b-col class="text-left" >
        <label style="color:#ffff;font-size:22px;margin-top:50px"> Login </label>
      </b-col>
      <b-col >
         <b-form-input v-model="emailLogin" type="email" class="input-login"  placeholder="Digite seu e-mail"></b-form-input>
         <b-form-input v-model="senhaLogin" type="password"   placeholder="Digite sua senha"></b-form-input>
      </b-col>
      <b-col class="text-left"><label style="color:red;font-size:18px;font-weight:bold"> {{alertaError}} </label> </b-col>
      <b-col v-if="callLogin==false" class="text-center">
        <b-button @click="loginUser" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>ENTRAR </strong> </b-button>
      </b-col>
      <b-spinner v-if="callLogin==true" variant="primary" label="Spinning"></b-spinner>
      <b-col class="text-center">
        <label style="color:#ffff"> Não possui cadastro? <strong @click="login=false" style="color:#9A9CD6;"> Cadastre-se </strong> </label>
      </b-col>
       
    </b-col>

   

      <b-col v-if="login==false && loginSucesso==false" sm="12" class="container" >
       
        <b-col class="text-left" >
          <label style="color:#ffff;font-size:22px;margin-top:50px"> Cadastro </label>
        </b-col>
        <b-col cols="12" >
          <b-form-input type="email" class="input-login" v-model="email"  placeholder="Digite seu e-mail"></b-form-input>
          <b-form-input :type="esconder==false?'password':'text'" class="input-login" v-model="senha"   placeholder="Digite sua senha"></b-form-input>
          <b-form-input :type="esconder==false?'password':'text'"  v-model="confirmarSenha"  placeholder="Confirmar senha"></b-form-input>
          <b-col class="text-left"><label style="color:red;font-size:18px;font-weight:bold"> {{alertaError}} </label> </b-col>
          
        </b-col>
        <b-col v-if="callCadastro==false" class="text-center">
          <b-button @click="createUser" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>CADASTRAR </strong> </b-button>
          <b-button @click="login=true" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px;margin-left:5px" ><strong>CANCELAR </strong> </b-button>
        </b-col>
        <b-spinner v-if="callCadastro==true"  variant="primary" label="Spinning"></b-spinner>
      </b-col>



      <b-col v-if="loginSucesso==true " sm="12" class="container" >
      <b-col class="text-left" >
        <label style="color:#ffff;font-size:22px;margin-top:50px"> Avaliar</label>
      </b-col>
      <b-col >
        <b-row>
          <b-col cols="12" style="padding:0">
          <b-form-input id='searchLivros' autocomplete="off" type="text" @input="procurarLivros" v-model="searchLivros"  class="input-login"  placeholder="Procurar livros"></b-form-input>
        </b-col>
        </b-row>
        
        
         <b-spinner v-if="buscandoLivro==true" variant="primary" label="Spinning"></b-spinner>

         <b-list-group v-if="livroSelecionado.length==0"  class="text-left">
            <b-list-group-item @click="selecionar(livro)" class="select" v-for="livro in resultData" ><img width="30" height="30" :src="livro.imageUrl"> {{livro.bookTitleBare}}</b-list-group-item>
          </b-list-group>

          <b-list-group class="text-left">
            <b-list-group-item @click="selecionar(livro)" class="select" v-for="livro in livroSelecionado" ><img width="30" height="30" :src="livro.imageUrl"> {{livro.bookTitleBare}}</b-list-group-item>
          </b-list-group>

         <b-form-rating variant = "warning" style="margin-top:40px" v-if="this.livroSelecionado.length==1" v-model="rating"></b-form-rating>
         <b-col class="text-left" style="padding:0"><label style="color:red;font-size:18px;font-weight:bold"> {{alertaError}} </label> </b-col>
    
      </b-col>
      <b-col class="text-center" v-if="SalvandoLivro==false">
        <b-button :disabled="this.livroSelecionado.length==0" @click="avaliarLivros" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>Salvar </strong> </b-button>
        <b-button @click="sair" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px;margin-left:30px" ><strong>Sair </strong> </b-button>
      </b-col>
      <b-spinner v-if="SalvandoLivro==true" variant="primary" label="Spinning"></b-spinner>
      
    
       
    </b-col>

    
       </div>
   
</template>



<script>

import axios from 'axios'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      loginSucesso:false,
      login:true,
      sucesso:false,
      value: null,
      searchLivros:'',
      resultData:null,
      livroSelecionado:[],
      rating:0,
      email:''.toLowerCase(),
      senha:'',
      confirmarSenha:'',
      alertaError:'',
      boxOne: '',
      boxTwo: '',
      emailLogin:''.toLowerCase(),
      senhaLogin:'',
      token:'',
      idUSer:null,
      esconder:false,
      callLogin:false,
      buscandoLivro:false,
      callCadastro:false,
      SalvandoLivro:false
    }
  },
  methods:{
    async procurarLivros(){
      if(this.searchLivros.length>1){
          this.buscandoLivro=true
          this.alertaError=''
     await axios.post(`https://apitcclivros.herokuapp.com/buscarLivros`,{
       pesquisarLivros:this.searchLivros
     }).then(resp=>{
        this.resultData=resp.data
        this.buscandoLivro=false
        console.log(this.livroSelecionado.length)
      })

      }
    
    },
    selecionar(livro){
      if(this.livroSelecionado.length==0){
      this.livroSelecionado.push(livro)
      }     
    },
    async createUser(){
        let regex = /[^a-zA-Z0-9]/
      if(!this.email){
        return this.alertaError='Por favor ensira um email'
      }
      if(!this.senha){
        return this.alertaError='Por favor insira uma senha'
      }
      if(!this.confirmarSenha){
        return this.alertaError='Por favor confirme a senha'
      }
       if(regex.test(this.senha)==true){
        return this.alertaError='Não é permitido caracteres especiais no campo senha'
      }
        if(this.senha.length<=5){
        return this.alertaError='Por favor digite uma senha de no mínimo de 6 caracteres'
      }
      if(this.confirmarSenha != this.senha){
        return this.alertaError='Por favor ensira uma senha corresponde a primeira'
      }
      if(!this.email.includes(' ')==false){
        return this.alertaError='Não e permitido espaços vazios no email'
      }
      if(!this.senha.includes(' ')==false){
        return this.alertaError='Não e permitido espaços vazios na senha'
      }
      if(!this.confirmarSenha.includes(' ')==false){
        return this.alertaError='Não e permitido espaços vazios na segunda senha'
      }
      if(this.email.includes('@')  ==false || this.email.includes('.')==false){
        return this.alertaError='Por favor ensira um email valido'
      }else{
        this.callCadastro=true
        axios.post('https://apitcclivros.herokuapp.com/users',{
          
            email:this.email.toLowerCase(),
            password:this.senha
        
        }).then(resp=>{
          this.callCadastro=false
          if(resp.data.status==false){
            return this.alertaError='Email já cadastrado'
          }else{
            this.showMsgBoxTwo()
            this.email=''
            this.senha=''
            this.confirmarSenha=''
            this.login=true
          }
        })
      }

    },
    showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Cadastro realizado com sucesso!', {
          title: 'Tudo certo!',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
      },
      loginUser(){
        this.callLogin=true
        axios.post('https://apitcclivros.herokuapp.com/sessions',{
          
            email:this.emailLogin.toLowerCase(),
            password:this.senhaLogin
        
        }).then(resp=>{
          this.callLogin=false
          if(resp.status==200){
             if(resp.data.token){
            this.token=resp.data.token
            this.login=false
            this.loginSucesso=true
            this.idUSer=resp.data.user.id
           }
          }

          if(resp.data.error=='Senha incorreta'){
            return this.alertaError='Senha incorreta!'
          }
          if(resp.data.error=='Email não cadastrado'){
            return this.alertaError='Email não cadastrado !'
          }
         
        })
      },
      avaliarLivros(){
        if(this.livroSelecionado.length==1){
          this.SalvandoLivro=true
          this.alertaError=''

          try {
              axios.post('https://apitcclivros.herokuapp.com/quiz',{
            	id_usuario:this.idUSer,
	           id_livro:this.livroSelecionado[0].bookId,
          	nome_livro:this.livroSelecionado[0].title,
            rating:this.rating,
            authorization: 'Bearer '+this.token
           }).then(resp=>{
            if(resp.data.status==false && resp.data.error=='Esse livro já foi avaliado'){
              this.resultData=null
              this.livroSelecionado=[]
              this.searchLivros=''
              this.SalvandoLivro=false
              this.rating=0
              window.document.getElementById('searchLivros').focus()
              return this.alertaError='Não e possivel avaliar o mesmo livro duas vezes.'

            }else{
                  if(resp.status==200){
               this.rating=0
               this.searchLivros=''
               this.livroSelecionado=[]
               this.resultData=null
                this.boxTwo = ''
                this.SalvandoLivro=false
        this.$bvModal.msgBoxOk('Avaliação enviada com sucesso!', {
          title: 'Obrigado por contribuir com sua avaliação!',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })

             }

            }
         
           })
            
          } catch (error) {
          
            
          }
          
         
        }

      },
      esconderSenha(){
        if(this.esconder==true){
          this.esconder=false
        }else{
          this.esconder=true
        }
      },
      sair(){
        this.login=true
        this.loginSucesso=false
        this.emailLogin=''
        this.senhaLogin=''
        this.resultData=null
        this.livroSelecionado=[]
        this.alertaError=''

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.container{
    background: url('../assets/login.jpg');
    min-height: 800px;

}

.input-login{
margin-bottom: 10px;
}

.list-group-item:hover {
background-color: #9A9CD6;
}

</style>
