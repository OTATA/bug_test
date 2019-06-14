export class AnotherAPI{
    async doIt() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject();
            }, 4000);
        })
    }
}
