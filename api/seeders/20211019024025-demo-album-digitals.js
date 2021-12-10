'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('album_digitals',
    [{
       nome:"Eric",
       cpf:"12345678910",
       tel_whats:"67992783866",
       email:"eric@gmail.com",
       estado:"Mato Grosso do sul",
       cidade:"Campo Grande",
       data_nascimento:"1999-05-05", 
       nome_responsavel:"eric",
       cpf_responsavel:"1231233",
       titulo_foto:"aaa",
       nome_fotografa:"deise",
       nome_foto:"asdasd.jpg",

      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
