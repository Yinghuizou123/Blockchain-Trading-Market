App = {
  web3Provider: null,
  contracts: {},
  account: "0x0",
  storage: "",
  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Modern dapp browsers...

    if (typeof web3 != "undefined") {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Airline.json", function(airline) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      App.contracts.Airline = TruffleContract(airline);
      App.contracts.Airline.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var AirlineInstance;
    var loader = $("#loader");
    var content = $("#content");
    loader.show();
    content.hide();

    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        console.log(account);
        storage = account;
        App.account = account;
        var accounts = web3.eth.accounts;
        console.log(accounts);
        $("#accountAddress").html("Your Current Airline is : " + account);

        // for (i = 0; i < 10; i++) {
        //   $("#mySelect").append(
        //     '<option value="' +
        //       accounts[i] +
        //       '">' +
        //       "Choose Airline " +
        //       accounts[i] +
        //       "</option>"
        //   );
        // }
      }
    });

    App.contracts.Airline.deployed()
      .then(function(instance) {
        AirlineInstance = instance;
        return AirlineInstance.Airlines(storage);
      })
      .then(function(output) {
        $("#Registeraddress").html("Your Register status is : " + output[1]);

        console.log(output[1]);
        loader.hide();
        content.show();
        // if (output[1]) {
        //   $(".enableOnInput").prop("disabled", true);
        // }
      })
      .catch(function(err) {
        console.log(err.message);
      });
  },

  Register: function() {
    console.log("it get call register");
    var accounts = web3.eth.accounts;

    console.log(storage);
    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.RegisterAirline({
          from: storage
        });
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.error(err);
      });
  },
  UnRegister: function() {
    console.log("it get call unregister");
    var accounts = web3.eth.accounts;
    console.log(storage);
    var unregisterid = $("#UnregisterID").val();

    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.UnRegisterAirline(unregisterid, {
          from: storage
        });
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.error(err);
      });
  },

  GetBalance: function() {
    console.log("it get call getbalances");
    var accounts = web3.eth.accounts;
    console.log(storage);

    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.BalanceDetails({
          from: storage
        });
      })
      .then(function(result) {
        console.log(result.c[0]);
        $("#balancesAddress").html("Your Current balances is : " + result.c[0]);
      })
      .catch(function(err) {
        console.error(err);
      });
  },
  Request: function() {
    console.log("it get call request");

    var selectedValue = $("#RequestID").val();

    var transferto = selectedValue;

    var inputmoney = $("#number").val();
    var amount = 80 * inputmoney;

    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.request(transferto, amount, {
          from: storage
        });
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.error(err);
      });
  },

  Respond: function() {
    console.log("it get call respond");
    var from = $("#respondid").val();

    var respond = from;

    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.respond(respond, {
          from: storage
        });
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.error(err);
      });
  },
  Settle: function() {
    console.log("it get call respond");
    var from = $("#Settleid").val();
    var respond = from;

    App.contracts.Airline.deployed()
      .then(function(instance) {
        return instance.SettlePayment(respond, {
          from: storage
        });
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(function(err) {
        console.error(err);
      });
  },

  bindEvents: function() {
    $(document).on("click", ".btn-adopt", App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data("id"));

    /*
     * Replace me...
     */
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
