import { getWallet } from 'src'
import { mock, resetMocks, trigger } from 'depay-web3-mock'

describe('MetaMask', () => {

  ['ethereum', 'bsc'].forEach((blockchain)=>{

    describe(blockchain, ()=> {

      const accounts = ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']
      beforeEach(resetMocks)
      beforeEach(()=>{
        resetMocks()
        mock({ blockchain, wallet: 'metamask' })
      })
      beforeEach(()=>mock({ blockchain, accounts: { return: accounts } }))

      it('should detect the wallet type', () => {
        expect(getWallet().name).toBe('MetaMask');
      });

      it('provides a connect function', async () => {
        expect(await getWallet().connect()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
      });

      it('provides an account function', async () => {
        expect(await getWallet().account()).toStrictEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
      });

      it('provides an accounts function', async () => {
        expect(await getWallet().accounts()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
      });

      it('provides an logo', async () => {
        expect(getWallet().logo).toStrictEqual("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns:ev='http://www.w3.org/2001/xml-events' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 318.6 318.6' style='enable-background:new 0 0 318.6 318.6;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23E2761B;stroke:%23E2761B;stroke-linecap:round;stroke-linejoin:round;%7D .st1%7Bfill:%23E4761B;stroke:%23E4761B;stroke-linecap:round;stroke-linejoin:round;%7D .st2%7Bfill:%23D7C1B3;stroke:%23D7C1B3;stroke-linecap:round;stroke-linejoin:round;%7D .st3%7Bfill:%23233447;stroke:%23233447;stroke-linecap:round;stroke-linejoin:round;%7D .st4%7Bfill:%23CD6116;stroke:%23CD6116;stroke-linecap:round;stroke-linejoin:round;%7D .st5%7Bfill:%23E4751F;stroke:%23E4751F;stroke-linecap:round;stroke-linejoin:round;%7D .st6%7Bfill:%23F6851B;stroke:%23F6851B;stroke-linecap:round;stroke-linejoin:round;%7D .st7%7Bfill:%23C0AD9E;stroke:%23C0AD9E;stroke-linecap:round;stroke-linejoin:round;%7D .st8%7Bfill:%23161616;stroke:%23161616;stroke-linecap:round;stroke-linejoin:round;%7D .st9%7Bfill:%23763D16;stroke:%23763D16;stroke-linecap:round;stroke-linejoin:round;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='274.1,35.5 174.6,109.4 193,65.8 '/%3E%3Cg%3E%3Cpolygon class='st1' points='44.4,35.5 143.1,110.1 125.6,65.8 '/%3E%3Cpolygon class='st1' points='238.3,206.8 211.8,247.4 268.5,263 284.8,207.7 '/%3E%3Cpolygon class='st1' points='33.9,207.7 50.1,263 106.8,247.4 80.3,206.8 '/%3E%3Cpolygon class='st1' points='103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1 '/%3E%3Cpolygon class='st1' points='214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1 '/%3E%3Cpolygon class='st1' points='106.8,247.4 140.6,230.9 111.4,208.1 '/%3E%3Cpolygon class='st1' points='177.9,230.9 211.8,247.4 207.1,208.1 '/%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st2' points='211.8,247.4 177.9,230.9 180.6,253 180.3,262.3 '/%3E%3Cpolygon class='st2' points='106.8,247.4 138.3,262.3 138.1,253 140.6,230.9 '/%3E%3C/g%3E%3Cpolygon class='st3' points='138.8,193.5 110.6,185.2 130.5,176.1 '/%3E%3Cpolygon class='st3' points='179.7,193.5 188,176.1 208,185.2 '/%3E%3Cg%3E%3Cpolygon class='st4' points='106.8,247.4 111.6,206.8 80.3,207.7 '/%3E%3Cpolygon class='st4' points='207,206.8 211.8,247.4 238.3,207.7 '/%3E%3Cpolygon class='st4' points='230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2 '/%3E%3Cpolygon class='st4' points='110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1 '/%3E%3C/g%3E%3Cg%3E%3Cpolygon class='st5' points='87.8,162.1 111.4,208.1 110.6,185.2 '/%3E%3Cpolygon class='st5' points='208.1,185.2 207.1,208.1 230.8,162.1 '/%3E%3Cpolygon class='st5' points='144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7 '/%3E%3Cpolygon class='st5' points='174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5 '/%3E%3C/g%3E%3Cpolygon class='st6' points='179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 '/%3E%3Cpolygon class='st6' points='110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 '/%3E%3Cpolygon class='st7' points='180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4 140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 '/%3E%3Cpolygon class='st8' points='177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 '/%3E%3Cg%3E%3Cpolygon class='st9' points='278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 281.8,129.1 275.6,124.3 283.6,118.2 '/%3E%3Cpolygon class='st9' points='31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 140.6,106.9 44.4,35.5 '/%3E%3C/g%3E%3Cpolygon class='st6' points='267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 '/%3E%3Cpolygon class='st6' points='103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 '/%3E%3Cpolygon class='st6' points='174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6 173.1,227.6 173.3,182.8 '/%3E%3C/svg%3E%0A");
      });

      it('registers a callback and informs about active connected account changes', async () => {
        let accountChangedTo;

        getWallet().on('account', (newAccount)=>{
          accountChangedTo = newAccount;
        })

        trigger('accountsChanged', ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045'])

        expect(accountChangedTo).toEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045')
      })

      it('registers a callback and informs about if any connected accounts have changed', async () => {
        let accountsChangedTo;

        getWallet().on('accounts', (newAccounts)=>{
          accountsChangedTo = newAccounts;
        })

        trigger('accountsChanged', ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045'])

        expect(accountsChangedTo).toEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045'])
      })

      it('registers a callback and informs about wallet changes network', async () => {
        let networkChangedTo;

        getWallet().on('network', (newNetwork)=>{
          networkChangedTo = newNetwork;
        })

        trigger('chainChanged', '0x38')
        expect(networkChangedTo).toEqual('bsc')

        trigger('chainChanged', '0x89')
        expect(networkChangedTo).toEqual('polygon')

        trigger('chainChanged', '0x1')
        expect(networkChangedTo).toEqual('ethereum')
      })

      it('provides the blockchains that are supported by the wallet', () => {
        expect(getWallet().blockchains).toEqual(['ethereum', 'bsc']);
      });

      it('provides a link to install the wallet', () => {
        expect(getWallet().install).toEqual('https://metamask.io/download.html');
      });
    });
  });
});
