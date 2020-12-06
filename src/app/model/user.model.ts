export class User implements IUser{
    constructor(
		public _id = '',
		public name = { first: '', middle: '', last: '' } as IName,
		public password = ''
    ){}
    
	static Build(user: IUser) {
		if (!user) {
		  return new User()
		}
		return new User(
		  user._id,
		  user.name,
		  user.password
		)
	}

	public get fullName(): string {
		if (!this.name) {
		  return ''
		}
		if (this.name.middle) {
		  return `${this.name.first} ${this.name.middle} ${this.name.last}`
		}
		return `${this.name.first} ${this.name.last}`
	}

	toJSON(): object {
		const serialized = Object.assign(this)
		delete serialized._id
		delete serialized.fullName
		return serialized
	}
}

export interface IUser{
    _id: string
    name: IName
	password: string
	readonly fullName?: string
}

export interface IName{
    first: string
    middle ?: string
    last: string
}