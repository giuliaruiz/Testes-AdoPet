describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 100
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5M2Q3NjAwMi1iYThmLTQ3NTYtYWU0Yi05NTg4YzNmNzY2ZTQiLCJhZG9wdGVyTmFtZSI6IkdpdWxpYSBSdWl6IiwiaWF0IjoxNzI0MDk0NzQzLCJleHAiOjE3MjQzNTM5NDN9.WNzHd1RkB-qgTVno9gx1od6_57_Hebogq1KeSBN_UE4`
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/93d76002-ba8f-4756-ae4b-9588c3f766e4',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})