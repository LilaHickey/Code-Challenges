/**
 * Task:Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * Link: https://leetcode.com/problems/defanging-an-ip-address/
 * 
 * 
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * 
 * This is an incredibly simple problem thanks to javascript's native 'split' (string) and 'join' (array)
 * methods.
 * 

* /**
* @param {string} address
* @return {string}
*/
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};
