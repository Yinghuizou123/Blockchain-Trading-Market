pragma solidity >=0.4.22 <0.6.0;

contract Airline{
   
    struct EachAirline{
        uint balances;
        bool RegisterorNot;
        mapping (address => uint) request_address_Price;
    }
    mapping (address => EachAirline)  public Airlines;
    address public chairperson;

    constructor() public {
        chairperson = msg.sender;
    }

    function RegisterAirline () public {
        Airlines[msg.sender].balances = 5000;
        Airlines[msg.sender].RegisterorNot = true;
    }
    function UnRegisterAirline (address unregisterairline) public{
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        Airlines[unregisterairline].balances = 0;
        Airlines[unregisterairline].RegisterorNot = false;
    }
    function request(address toairline, uint amount) public {
        require(Airlines[msg.sender].RegisterorNot,"Sender Did not Register Account.");
        require(Airlines[toairline].RegisterorNot,"Receiver did not register account.");
        require(amount <= Airlines[msg.sender].balances,"not enought amount from the sender");
        Airlines[toairline].request_address_Price[msg.sender] = amount;
    }
    function respond(address toairline) public {
        require(Airlines[msg.sender].RegisterorNot,"Sender Did not Register Account.");
        require(Airlines[toairline].RegisterorNot,"Receiver did not register account.");
        Airlines[msg.sender].balances = Airlines[msg.sender].balances;
    }
    function SettlePayment(address toairline) public {
        Airlines[msg.sender].balances += Airlines[msg.sender].request_address_Price[toairline];
        Airlines[toairline].balances -= Airlines[msg.sender].request_address_Price[toairline];
        Airlines[msg.sender].request_address_Price[toairline] = 0;
    }
    function BalanceDetails() public view returns (uint){
        require(Airlines[msg.sender].RegisterorNot,"Sender Did not Register Account.");
        return Airlines[msg.sender].balances; 
    }

}