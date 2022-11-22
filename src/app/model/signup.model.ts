export class Signup {

    constructor(
        public loginId :string,
        public email   :string,
        public firstName:string,
        public lastName:string,
        public password :string,
        public confirmPassword:string,
        public role:string
    ){}
}
