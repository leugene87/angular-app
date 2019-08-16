export class User {

    constructor(
        private _accessToken: string,
        public userName: string,
        public id: string,
        public realName: string,
        public firstName: string,
        public lastName?: string,
        public avatarURI?: string,
        public email?: string,
        public phone?: string,
        public resourceRoleCode?: string,
        public companies?: []) {

    }
    get accessToken() {
        return this._accessToken;
    }

}