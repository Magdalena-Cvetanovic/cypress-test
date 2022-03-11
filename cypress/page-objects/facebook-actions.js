export function checkIfEleExists(ele){
    return new Promise((resolve,reject)=>{
        /// here if  ele exists or not
        try {
            cy.get('.fcb > a').find( ele ).its('length').then(res=>{
                if(res > 0){
                    //// do task that you want to perform
                    cy.get(ele).select('100').wait(2000).click();
                    resolve();
                }else{
                    reject();
                }
            });
        } catch (error) {
        
        }
      
    })
}