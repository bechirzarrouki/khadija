
const valider  = (values) => {
    let errors = {}
   if (!values.name){
    errors.name = "Name Required";
   }
   else if (values.name.length < 5){
    errors.name = "Name must be more than 5";
   }
   if (!values.password){
    errors.password="password Required";
   }
   else if (values.password.length < 9 ){
    errors.password="password must be more than 8";
   }
   return  errors;
   
};
export default valider;
