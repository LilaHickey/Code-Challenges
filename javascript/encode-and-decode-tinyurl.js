/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    console.log('input: ',longUrl);
    const [hostname, urlsegment] = getHostName(longUrl);
    console.log('hostname: ', hostname);
    console.log('urlsegment: ', urlsegment);
    const encoder = encodeURI(urlsegment);
    console.log('encoder: ', encoder); 
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    
};

function getHostName(url) {
    var match = url.match( /:\/\/(www[0-9]?\.)?(.[^/:]+)(.+)/i );
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        console.log('WHAT IS MATCH: ', match);
    return [match[2], match[3]];
    }
    else {
        return null;
    }
}

encode("https://leetcode.com/problems/design-tinyurl")
/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 /**
  * So the most obvious rule here is that:
  *
  * 1) the encoding process has to *shorten* the urls
  * 2) the encoding algorithm has to be deterministic, i.e. no encoding collisions are possible.
  *
  * a very simplistic way to do that would be to say:
  * every two letters are shortened to a single letter
  * or every three letters..
  * or you could just take that its natural conclusion and say:
  * "he string you've fed me will be shortened to the next available set of letters, assuming it does not already exist in our dataset. "
  * 
  * to be honest though, I don't want to write that mapping for this problem.  pondering other options...
  * 
  * thought process: what if we said "last three letters of the current string + number of characters in string"
  * -> not deterministic because you could have my-string-abc and yours-too-abc and they would collide.
  * realistically, the encoded string has to represent every value in the original string to avoid collisions.
  * 
  * I'm pretty stumped on this for now.  going to double-back to it at some point.
  * 
  * 
  * 
  */

// 
  // 

  // 
  // 