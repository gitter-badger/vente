/**
* This class provides basic Ajax CRUD operations
* @class Ajax
* @classdesc This class provides basic Ajax CRUD operations to interact with different Shwyr services
* @author Mayas Haddad
*/
export default class Ajax {
	
	/**
	 * @param {string} pUrl: the URL of the remote server to which you want to get data
	 * @param {object} pData: the data to attach to the current request
	 * @param {function} pSuccessCallback: the callback to be triggered after the success of the current GET
	 * @param {function} pErrorCallback: the callback to be triggered after failure of the current GET
	 */	
	get(pUrl, pData, pSuccessCallback, pErrorCallback) {
		var r = new XMLHttpRequest();
		r.open('GET', pUrl, true);
		r.onreadystatechange = function () {
			if (r.readyState > 2 && r.status === 200) {
				return pSuccessCallback(r.responseText); 
			}
		};
		r.send(pData);
	}
	
	/**
	 * @param {string} pUrl: the URL of the remote server to which you want to post data
	 * @param {object} pData: the data to attach to the current request
	 * @param {function} pSuccessCallback: the callback to be triggered after the success of the current POST
	 * @param {function} pErrorCallback: the callback to be triggered after failure of the current POST
	 */
	post(pUrl, pContentType, pData, pSuccessCallback, pErrorCallback)	{
		var r = new XMLHttpRequest();
		r.open('POST', pUrl, true);
		r.setRequestHeader('Content-type', pContentType);
		r.onreadystatechange = function () {
			if (r.readyState > 3 && r.status === 200) {
				return pSuccessCallback(r.responseText); 
			}
		};
		r.send(JSON.stringify(pData));
	}
}