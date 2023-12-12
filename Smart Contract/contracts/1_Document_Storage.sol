// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
import "../node_modules/hardhat/console.sol";

contract Document_Storage {

    struct Document{
        string _unique_key;
        uint256 _roll_no;
        string _file_hash;
        string _file_type;
        bool _isValue;
    }

    mapping (string => Document) public Document_info;

    function store_file(string memory unique_key, uint256 roll_no, string memory file_hash, string memory file_type) public{
        Document memory temp = Document_info[unique_key];
        if(temp._isValue) revert(); 
        Document memory document = Document(unique_key, roll_no, file_hash, file_type, true);
        Document_info[unique_key] = document;
    }

    function get_file(string memory unique_key )external view returns (Document memory){
        return Document_info[unique_key];
    }
    
}