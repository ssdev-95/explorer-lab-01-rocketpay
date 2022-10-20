const ROCKET = /(0000000000000000)/
const VISA = /^4\d{12}(\d{3})?$/
const MASTER = /^(5[1-5]\d{4}|677189)\d{10}$/
const ELO = /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/

// TODO: Implements others brands, maybe not :D
//const AMEX = /^3[47]\d{13}$/
//const JCB = /^(?:2131|1800|35\d{3})\d{11}$/
//const AURA = /^(5078\d{2})(\d{2})(\d{11})$/
//const HIPERCARD = /^(606282\d{10}(\d{3})?)|(3841\d{15})$/
//const MAESTRO = /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/
//const DINNERS= /^3(0[0-5]|[68]\d)\d{11}$/

export function regexMatcher(value:string) {
	if(value.match(VISA) !== null) return 'visa';

	if(value.match(MASTER) !== null) return 'master';

	if(value.match(ELO) !== null) return 'elo';

	if(value.match(ROCKET) !== null) return 'rocket';

	return 'default'
}
