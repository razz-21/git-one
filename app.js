const Sequelize = require('sequelize');

const connection = new Sequelize('test', 'root', 'tadashi21', {
	host: 'localhost',
	dialect: 'mysql'
});

const Article = connection.define('article', {
	idarticle: { 
		type: Sequelize.INTEGER,
		unique: true, 
		allowNull: false,
		primaryKey: true, 
		autoIncrement: true 
	},
	title: { 
		type: Sequelize.STRING,
		allowNull: false, 
	},
	description: { 
		type: Sequelize.TEXT('tiny') 
	}
})

connection.sync({
	force: true, 
	logging: console.log 
}).then(() => {
	var articleInstance = Article.build({
		title: 'Article title',
		description: 'This is a description'
	})
	articleInstance.save();
}).catch((error) => {
	console.log(error);
})