import { UserSession, AppConfig } from 'blockstack'

class AuthAPI {
	constructor() {
		this.userSession = null
		this.appConfig = null
	}

	session() {
		if(!this.userSession) {
			this._init()
		}
		return this.userSession
	}

	_init() {
		this.appConfig = new AppConfig(['email', 'store_write', 'publish_data'], 'http://localhost:4000', '/login')
		this.userSession = new UserSession({ 
			appConfig: this.appConfig 
		})	
	}
}

export const authApi = new AuthAPI()