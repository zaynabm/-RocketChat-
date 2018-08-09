class ModelReadReceipts extends RocketChat.models._Base {
	constructor() {
		super(...arguments);

		this.tryEnsureIndex({
			roomId: 1,
			userId: 1,
			messageId: 1
		}, {
			unique: 1
		});
	}

	findByMessageId(messageId) {
		return this.find({ messageId });
	}
}



var happyCounter=0;
var sadCounter=0;
var confusedCounter=0;
var uncertainCounter=0;




export default new ModelReadReceipts('message_read_receipt');

export const methods = {
    getCounter(mode) {
        console.log("mooooode",mode);
    }
};
