```shell
# Fatal: Failed to register the Ethereum service: can't run eth.Ethereum in light sync mode, light mode has been deprecated
geth --syncmode light --http --http.addr localhost

# Blockchain sync mode ("snap" or "full")
geth --sepolia --syncmode snap --http --http.addr localhost
```
