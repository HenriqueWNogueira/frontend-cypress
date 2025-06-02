import registerPage from "../pages/registerPage.js"

const registerPageInstance = new registerPage()


describe('Registro de novo usuário com sucesso', () => {

       it('Deve registrar um novo usuário com informações válidas', () => {
             
             registerPageInstance.acessSignUp()
             const userData = registerPageInstance.getUserData().signUp
             registerPageInstance.signUpForm (userData.firstName,userData.lastName,userData.userName ,userData.passWord ,userData.confirmPassword)
             registerPageInstance.saveSignUp()
       
       })
      

       it('Tentar registrar um novo usuário com informações invalidas',()=> {
    
       
              registerPageInstance.acessSignUp()
              const userData= registerPageInstance.getUserData().invalidSignUp
              registerPageInstance.signUpForm (userData.firstName,userData.lastName,userData.userName,userData.passWord,userData.confirmPassword)
              registerPageInstance.invalidRegister ()
                      
      })
    
    
})