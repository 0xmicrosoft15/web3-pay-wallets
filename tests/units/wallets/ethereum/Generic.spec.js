import fetchMock from 'fetch-mock'
import { Blockchain } from 'depay-web3-blockchains'
import { getWallet } from 'dist/cjs/index.js'
import { mock, resetMocks, trigger } from 'depay-web3-mock'

describe('Generic Ethereum Wallet', () => {

  const blockchain = 'ethereum'
  const accounts = ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']
  beforeEach(resetMocks)
  beforeEach(()=>mock({ blockchain, accounts: { return: accounts } }))

  it('should detect any generic Ethereum wallet integration that integrates window.ethereum', () => {
    mock('ethereum')
    expect(getWallet().name).toBe('Web3 Wallet');
  });

  it('provides a connect function', async () => {
    mock('ethereum')
    expect(await getWallet().connect()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
  });

  it('provides an account function', async () => {
    mock('ethereum')
    expect(await getWallet().account()).toStrictEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');
  });

  it('provides an accounts function', async () => {
    mock('ethereum')
    expect(await getWallet().accounts()).toStrictEqual(['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']);
  });

  it('provides a logo', async () => {
    mock('ethereum')
    expect(getWallet().logo).toStrictEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAATlBMVEVHcEzb29vNzc3KysrIyMeXl5dsbGy7u7uAgIBkZGOoqKhTU1KYmJhBQUAoKCgNDQ0UFBQzMzM2NjY5OTk6Ojo8PDtTU1NwcHCGhoaMjIysizAMAAAAD3RSTlMADSM8XGR6ipe0udLg5v5DaY2WAAAF70lEQVR42u2d6XabMBCF2RLHGIMlUCK//4tWBswYDRLegmZS3X89p+3JV907M1rsJlFRUVFRUVFRUVFRUVFRUf+t8jz5E0qrQ5r8BRW6/kj+gLJKS5Ul/LXTuqv3CXvl57PuhOCf91JfQGr2eS/0sCLc855VI4hQvM210+cRhHfeTdIHkAtJkfBVqScQyTnvhYYV4Zz37EIBIEJy7e87fQPCOO/5+WZFOJur1BYI0/5ukm5nRNRfCTsNSQcQtnnf6TkI17znGq8Iy/5eOUAEs7yPxsIgzPKeVWcXiGC1fy81AmGZd2ghAMIx72m5DMKuvw9JxyDc+jskHUDm6njkvdRLIPzybnq6G4TRPJ9Wd4CII/28T0nHIKz6e5/0dRDRUT+vK7UDhFneTU93gzDq72nlBOGV9ynpGIRV3s0+/X4Qypc/pXaDcMp7cfavCJf+bpLuAWGU9532rQifvJujXh8In7yX2gvCJu+F9q8Il7yn1QoIl7ybpPtBmOTd9PQVECZ5L/WzIPUhIaRCP70iklLe0+oJEMg7ncMhk/RVEA55N0lfB+GQ91I/DELyMLjQayuivBySSH9Pq1WQyw9LP++7NWN9d6dTLSX1vK8k/ee7lfJkVAsfiwyfd1/S9c+3lG1nQK4odPPuS/qPMhhtDwIoRPu7eXzpjIYSBmMCARSSeXcl/WfAQCDNqTYs9PKeuzCk6BkABFCGZSHW3xeT3ie8dYCAwyjN8wtJ1z+DpzAIRiGT9zHpOOGrIIBC4nHHTq9hYJB57qWkkPcc9fBLwldAvLmvw+S91HYPb/0gXoeFe6xdaDvhD4MASsDzunF6h2g8BQIowfK+07Me/hJI08/5YfKez3r4ayCwLAHyXuqph78JpEfZPO8m6XqY0t8I0qNsa660GhP+ZpBLk9x0nt8NGG8H6WG2vPzJD4bjd0Ca46a9JP04CvkLIE39uW3YDcqXEu8GaU77LQNyVbYXb61azcauupHx1/v6iHFVEkwXf70HJJCrZv4Sr4MYV209mmB9HF4fGkOM74OlZr/4PIpXQJrT5iV3UlFY/pLiWZCmOWTzFd5yddKyzFCrfwqkER/Wv8m246+5TNit+QtA1hs5/C3txqkvtK4sf309fIrS7C1XHQLs2s23hOgyR/56AGRq5JA0KbYcfeHwQYO/oNW7QNZdJTq56WbkdteO/aUEBrnPVa3qZJDn2f05CvbX3neIDeMh+kNKKbHpNtc6gLj4K/P6C0DAVWhiU0bBPjWaGYjRX+gHc4M0J+yq7sLRhvsoxnRqCihQgG5AfI08N79V9RKbV96lLxE4l/Y/8/Idovi0ikM3YqgAlXfpABiV4vTrKCYQcBUq193IEaTyWjXY6S8hBhCXqw6yVaM6EaTyWjUY/JUjf00gzdHpqoCVd/m6B7d60657ENzIR1ddjRWq8uIbUXf9ErJ3FW7koJbCl1YV9pWo7a99jcfD9uqq8JXX/WoAj5JOV1GovLa5fP5adhUYK2zldd5T26Mk6vnjz0+m8vreCMEoaU9hV1dRqrzWdyNgf03RwI2cVOW1zYVRctTIkToCzxk9NRhGyZu94zUcBCvvcg3GpRiXXKi8hIw1n4OXSnEOJZdo5fWZC/y1713FwVj+F9m6u7qKcOW95428VjYIjc3UQzUYQMhXXo+5AISPsbw1WPGovLM5eAWE2mbKpeIBEDoz70pMMAjFzZS/BmMQLpUXlN+1IqEuEF7dZCnKmynPJssPEvQC4cHLBgzCqPKCigUQ+jPvXZ9iUCSPsR6owQDCqvKCcgRC8xjrbnMBCK/Ki+ZgAGFWeUGZtSLcKq9dgzHI9o9mkveZy4Aw2Ezdc+GriFzdPqf8dkUYVt7bGgwgHCvv7Rw8gXCsvKAcVoT0MdY9NfgKwmnmXa7BIwinmddx0DWAkLxAeMhcIwhvYw01uAfhWnlnDf4CQurq9vn/RlC1Wz8U/w2ZJ9tq2497/pZK3fKbeZc3Wdw2Uy4VLGfeqKioqKioqKioqKioqKioqKioqCi++gduXg5NmW/p2QAAAABJRU5ErkJggg==');
  });

  it('registers a callback and informs about wallet address changes', async () => {
    let walletChangedTo;

    mock('ethereum')

    getWallet().on('account', (newAccount)=>{
      walletChangedTo = newAccount;
    })

    trigger('accountsChanged', ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045'])

    expect(walletChangedTo).toEqual('0xd8da6bf26964af9d7eed9e03e53415d37aa96045')
  })

  it('registers a callback and informs about wallet changes network', async () => {
    let networkChangedTo;

    mock('ethereum')

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
    mock('ethereum')
    expect(getWallet().blockchains).toEqual(['ethereum'])
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
});
