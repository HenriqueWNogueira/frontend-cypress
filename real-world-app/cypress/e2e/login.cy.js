import loginPages from '../pages/loginPages.js'
import userData from '../fixtures/userData.json'

const loginPagesInstance = new  loginPages();



describe('Real World APP',()=> {
  

      it('Login with Sucess',()=>{

       
            loginPagesInstance.acessLoginPage ()
            
            loginPagesInstance.loginWithUser(userData.userSucess.username,userData.userSucess.password)

      })

      it('Login Fail',()=>{
       
       
             loginPagesInstance.acessLoginPage ()
             
             loginPagesInstance.loginWithUser(userData.userFail.username,userData.userFail.password)
             loginPagesInstance.loginFail()

      })

})