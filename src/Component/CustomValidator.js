const CustomValidator = {
    firstName: {
      rules: [
        {
          test: (value) => {
            return value.length > 3;
          },
          message: 'Username must be longer than three characters',
        },
        {
            test: (value) => {
              return value.length < 8;
            },
            message: 'Username must be less than eight characters',
          },
      ],
      errors: [],
      valid: false,
      state: '',
     },
     lastName: {
        rules: [
          {
            test: (value) => {
              return value.length > 6;
            },
            message: 'last name must be longer than six characters',
          },
          {
              test: (value) => {
                return value.length < 20;
              },
              message: 'last name must be less than 20 characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },
    phoneNumber: {
        rules: [
          {
            test: (value) => {
              return value.length ===10;
            },
            message: 'phone number should be 10 digit',
          },
         
        ],
        errors: [],
        valid: false,
        state: '',
    },


   managerName: {
      rules: [
        {
          test: (value) => {
            return value.length > 3;
          },
          message: 'manager name must be longer than three characters',
        },
        {
            test: (value) => {
              return value.length < 20;
            },
            message: 'manager must be less than 20 characters',
          },
      ],
      errors: [],
      valid: false,
      state: '',
     },
     restaurantName: {
        rules: [
          {
            test: (value) => {
              return value.length > 3;
            },
            message: 'restaurant name must be longer than three characters',
          },
          {
              test: (value) => {
                return value.length < 20;
              },
              message: 'restaurant name must be less than 20 characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
       },
       email:{
           rules:[
               {
                   test:(value)=>{
                       return value.length>8;
                   },
                   message:'email should have at least 8 characters',
               },
           ],
           errors:[],
           valid:false,
           state:'',
       },
       password:{
           rules:[
               {
                   test:(value)=>{
                       return value.length>8;
                   },
                   message:'password should have at least 8 characters',
               },
           ],
           errors:[],
           valid:false,
           state:'',
       },
       confirmPassword:{
        rules:[
            {
                test:(value)=>{
                    return value.length>8;
                },
                message:'password should have at least 8 characters',
            },
        ],
        errors:[],
        valid:false,
        state:'',
    },
    };
  export default CustomValidator;
  