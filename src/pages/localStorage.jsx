export default function LocalStorageService() {

    function _getAccessToken() {
      return localStorage.getItem("Auth");
  }
    return {
      getAccessToken: _getAccessToken,
    };
  };