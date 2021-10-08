import fetchMock from 'fetch-mock'
import { Blockchain } from 'depay-web3-blockchains'
import { getWallet, wallets } from 'src'
import { mock, resetMocks, trigger } from 'depay-web3-mock'

describe('Ethereum generic Web3 Wallet', () => {

  ['ethereum', 'bsc'].forEach((blockchain)=>{

    describe(blockchain, ()=> {

      describe('with no supported wallet connected', ()=>{
        
        beforeEach(resetMocks)

        it('provides an accounts function that returns empty list of accounts', async () => {
          expect(await wallets.Web3Wallet.accounts()).toStrictEqual([])
        })

        it('provides an account function that returns undefined', async () => {
          expect(await wallets.Web3Wallet.account()).toStrictEqual(undefined)
        })

        it('provides an connect function that returns empty list of accounts', async () => {
          expect(await wallets.Web3Wallet.connect()).toStrictEqual([])
        })
      })

      describe('with supported wallet connected', ()=>{

        const accounts = ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']
        beforeEach(resetMocks)
        beforeEach(()=>mock({ blockchain, accounts: { return: accounts } }))

        it('should detect any generic wallet integration that integrates window.ethereum', () => {
          mock(blockchain)
          expect(getWallet().name).toBe('Web3 Wallet');
        });

        it('provides a connect function', async () => {
          mock(blockchain)
          expect(await getWallet().connect()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
        });

        it('provides an account function', async () => {
          mock(blockchain)
          expect(await getWallet().account()).toStrictEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
        });

        it('provides an accounts function', async () => {
          mock(blockchain)
          expect(await getWallet().accounts()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
        });

        it('provides a logo', async () => {
          mock(blockchain)
          expect(getWallet().logo).toStrictEqual("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3263.49 2754.34'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23333;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M4477.2,2928.27h473.06V2463.11c0-187.93-152.35-340.28-340.28-340.28H2027.06c-187.94,0-340.29,152.35-340.29,340.28v475.81h261.09l196.39-196.39a68.87,68.87,0,0,1,41.92-20,.18.18,0,0,0,.1,0c1-.09,2-.17,3-.22l.5,0c1.17-.05,2.35-.09,3.53-.09h570.53a345.09,345.09,0,1,1,604.06,289.24q-10.36,12.51-22,24.16t-24.13,22c-61.71,51.21-138.63,79.07-219.84,79.07A345.26,345.26,0,0,1,2763.87,2861H2222.1l-196.4,196.4a69,69,0,0,1-41.91,20h-.1c-1,.1-2,.18-3,.23-.17,0-.33,0-.5,0-1.17.07-2.35.1-3.53.1H1686.77v541.35h210.91l133.37-133.37a69,69,0,0,1,41.91-20h.1c1-.1,2-.18,3-.23l.5,0c1.18-.06,2.35-.09,3.54-.09H2294.6a344.82,344.82,0,1,1,0,138.84H2108.89l-133.37,133.38a68.92,68.92,0,0,1-41.81,20l-.21,0c-1,.1-1.9.16-2.86.22l-.68.05c-1,0-2,.07-3,.08H1686.77v249.26h411.66c1.18,0,2.36,0,3.53.1l.5,0c1,.07,2,.14,3,.24h.1a68.85,68.85,0,0,1,41.91,20l204.79,204.78h421.49a345.08,345.08,0,1,1,595.62,299q-6.55,7.35-13.58,14.37t-14.36,13.58a345.18,345.18,0,0,1-567.68-188.14H2323.55a68.76,68.76,0,0,1-22.6-3.8c-.19-.06-.37-.11-.55-.18-.71-.25-1.42-.52-2.12-.79-.42-.17-.86-.33-1.28-.51l-1.34-.59c-.67-.29-1.33-.58-2-.89l-.6-.3a69.37,69.37,0,0,1-18.62-13.27l-204.78-204.79h-382.9v390.81c0,187.93,152.35,340.28,340.29,340.28H4610c187.93,0,340.28-152.35,340.28-340.28V4071.73H4477.2c-315.75,0-571.72-256-571.72-571.73h0C3905.48,3184.24,4161.45,2928.27,4477.2,2928.27Z' transform='translate(-1686.77 -2122.83)'/%3E%3Cpath class='cls-1' d='M3301.83,4301.79c0-104.76-85.22-190-190-190s-190,85.22-190,190,85.22,190,190,190S3301.83,4406.53,3301.83,4301.79Z' transform='translate(-1686.77 -2122.83)'/%3E%3Cpath class='cls-1' d='M3291.91,2791.62c0-104.75-85.21-190-190-190s-190,85.22-190,190,85.23,190,190,190S3291.91,2896.38,3291.91,2791.62Z' transform='translate(-1686.77 -2122.83)'/%3E%3Ccircle class='cls-1' cx='2632.67' cy='3534.84' r='189.97' transform='translate(-3415.2 774.08) rotate(-45)'/%3E%3Cpath class='cls-1' d='M4480.73,3064.51h-3.53c-240.51,0-435.49,195-435.49,435.49h0c0,240.52,195,435.49,435.49,435.49h3.53c240.52,0,435.5-195,435.5-435.49h0C4916.23,3259.48,4721.25,3064.51,4480.73,3064.51Zm105.61,662.37H4359.46l64.86-237.8a113.44,113.44,0,1,1,97.16,0Z' transform='translate(-1686.77 -2122.83)'/%3E%3C/svg%3E");
        });

        it('registers a callback and informs about wallet address changes', async () => {
          let walletChangedTo;

          mock(blockchain)

          getWallet().on('account', (newAccount)=>{
            walletChangedTo = newAccount;
          })

          trigger('accountsChanged', ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045'])

          expect(walletChangedTo).toEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045')
        })

        it('registers a callback and informs about wallet changes network', async () => {
          let networkChangedTo;

          mock(blockchain)

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
          mock(blockchain)
          expect(getWallet().blockchains).toEqual(['ethereum', 'bsc'])
        });

        it('allows to switch network', async ()=>{
          let switchMock = mock({
            blockchain: 'ethereum',
            network: { switchTo: 'bsc' }
          })
          let wallet = getWallet()
          await getWallet().switchTo('bsc')
          expect(switchMock).toHaveBeenCalled()
        })

        it('adds the network if the network you request to switch to does not exist and switches to it afterwards', async ()=>{
          let switchMock
          let blockchain = Blockchain.findByName('bsc')

          mock({
            blockchain: 'ethereum',
            network: { 
              switchTo: 'bsc',
              error: ()=>{
                switchMock = mock({
                  blockchain: 'ethereum',
                  network: { switchTo: 'bsc' }
                })
                return { code: 4902 }
              }
            }
          })

          let addMock = mock({
            blockchain: 'ethereum',
            network: {
              add: {
                chainId: blockchain.id,
                chainName: blockchain.fullName,
                nativeCurrency: {
                  name: blockchain.currency.name,
                  symbol: blockchain.currency.symbol,
                  decimals: blockchain.currency.decimals
                },
                rpcUrls: [blockchain.rpc],
                blockExplorerUrls: [blockchain.explorer],
                iconUrls: [blockchain.logo]
              }
            }
          })
          
          let wallet = getWallet()
          await wallet.switchTo('bsc')

          expect(switchMock).toHaveBeenCalled()
          expect(addMock).toHaveBeenCalled()
          expect(await wallet.connectedTo('bsc')).toEqual(true)
        })

        it('registers a callback and informs about wallet having been disconnected', async () => {

          mock(blockchain)

          let disconnectCalled

          getWallet().on('disconnect', ()=>{
            disconnectCalled = true
          })

          await trigger('disconnect')

          expect(disconnectCalled).toEqual(true)
        })
      })
    })
  })
})
