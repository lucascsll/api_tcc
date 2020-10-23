<template>

<div>
   <b-col v-if="login==true" sm="12" class="container" >
      <b-col class="text-left" >
        <label style="color:#ffff;font-size:22px;margin-top:50px"> Login </label>
      </b-col>
      <b-col >
         <b-form-input v-model="emailLogin" class="input-login"  placeholder="Digite seu e-mail"></b-form-input>
         <b-form-input v-model="senhaLogin"   placeholder="Digite sua senha"></b-form-input>
      </b-col>
      <b-col class="text-center">
        <b-button @click="loginUser" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>ENTRAR </strong> </b-button>
      </b-col>
      <b-col class="text-center">
        <label style="color:#ffff"> Não possui cadastro? <strong @click="login=false" style="color:#9A9CD6;"> Cadastre-se </strong> </label>
      </b-col>
       
    </b-col>

   

      <b-col v-if="login==false && loginSucesso==false" sm="12" class="container" >
       
        <b-col class="text-left" >
          <label style="color:#ffff;font-size:22px;margin-top:50px"> Cadrasto </label>
        </b-col>
        <b-col >
          <b-form-input class="input-login" v-model="email"  placeholder="Digite seu e-mail"></b-form-input>
          <b-form-input class="input-login" v-model="senha"   placeholder="Digite sua senha"></b-form-input>
          <b-form-input  v-model="confirmarSenha"  placeholder="Confirmar senha"></b-form-input>
          <b-col class="text-left"><label style="color:red;font-size:18px;font-weight:bold"> {{alertaError}} </label> </b-col>
          
        </b-col>
        <b-col class="text-center">
          <b-button @click="createUser" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>CADASTRAR </strong> </b-button>
          <b-button @click="login=true" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px;margin-left:5px" ><strong>CANCELAR </strong> </b-button>
        </b-col>
      </b-col>



      <b-col v-if="loginSucesso==true " sm="12" class="container" >
      <b-col class="text-left" >
        <label style="color:#ffff;font-size:22px;margin-top:50px"> Avaliar</label>
      </b-col>
      <b-col >
         <b-form-input v-model="searchLivros" @keypress="procurarLivros" class="input-login"  placeholder="Procurar livros"></b-form-input>

         <b-list-group v-if="livroSelecionado.length==0"  class="text-left">
            <b-list-group-item @click="selecionar(livro)" class="select" v-for="livro in resultData" ><img width="30" height="30" :src="livro.imageUrl"> {{livro.bookTitleBare}}</b-list-group-item>
          </b-list-group>

          <b-list-group class="text-left">
            <b-list-group-item @click="selecionar(livro)" class="select" v-for="livro in livroSelecionado" ><img width="30" height="30" :src="livro.imageUrl"> {{livro.bookTitleBare}}</b-list-group-item>
          </b-list-group>

         <b-form-rating variant = "warning" style="margin-top:40px" v-if="this.livroSelecionado.length==1" v-model="rating"></b-form-rating>
    
      </b-col>
      <b-col class="text-center">
        <b-button @click="avaliarLivros" style="background-color:#9A9CD6;margin-bottom:30px;margin-top:50px" ><strong>Salvar </strong> </b-button>
      </b-col>
    
       
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
      email:'',
      senha:'',
      confirmarSenha:'',
      alertaError:'',
      boxOne: '',
      boxTwo: '',
      emailLogin:'',
      senhaLogin:'',
      token:'',
      idUSer:null
    }
  },
  methods:{
    teste(){
      console.log('teste')
    },
    async procurarLivros(){
     await axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=${this.searchLivros}`).then(resp=>{
        this.resultData=resp.data
        console.log(this.livroSelecionado.length)
      })
    },
    selecionar(livro){
      if(this.livroSelecionado.length==0){
      this.livroSelecionado.push(livro)
      }     
    },
    createUser(){
      if(!this.email){
        return this.alertaError='Por favor ensira um email'
      }
      if(!this.senha){
        return this.alertaError='Por favor ensira uma senha'
      }
      if(!this.confirmarSenha){
        return this.alertaError='Por favor confirme a senha'
      }
      if(this.confirmarSenha != this.senha){
        return this.alertaError='Por favor ensira uma senha corresponde a primeira'
      }
      if(this.email.includes('@')  ==false || this.email.includes('.')==false){
        return this.alertaError='Por favor ensira um email valido'
      }else{
        axios.post('http://localhost:3333/users',{
          
            email:this.email,
            password:this.senha
        
        }).then(resp=>{
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
            console.log(value)
          })
          .catch(err => {
            // An error occurred
          })
      },
      loginUser(){
        axios.post('http://localhost:3333/sessions',{
          
            email:this.emailLogin,
            password:this.senhaLogin
        
        }).then(resp=>{
          if(resp.data.token){
            this.token=resp.data.token
            this.login=false
            this.loginSucesso=true
            this.idUSer=resp.data.user.id
          }
        })
      },
      avaliarLivros(){
        console.log(this.livroSelecionado)
        if(this.livroSelecionado.length==1){
           axios.post('http://localhost:3333/quiz',{
            	id_usuario:this.idUSer,
	           id_livro:this.livroSelecionado[0].bookId,
          	nome_livro:this.livroSelecionado[0].title,
            rating:this.rating,
            authorization: 'Bearer '+this.token
           })
        }

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
