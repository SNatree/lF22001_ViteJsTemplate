// LocalStorageService.js
const LocalStorageService = (function () {
    var _service
    function _getService() {
        if (!_service) {
            _service = this
            return _service
        }
        return _service
    }
    function _setToken(tokenObj) {
        localStorage.setItem('mfc_access_token', tokenObj.access_token)
        localStorage.setItem('mfc_refresh_token', tokenObj.refresh_token)
    }
    function _getAccessToken() {
        return localStorage.getItem('mfc_access_token')
    }
    function _getRefreshToken() {
        return localStorage.getItem('mfc_refresh_token')
    }
    function _clearToken() {
        localStorage.removeItem('mfc_access_token')
        localStorage.removeItem('mfc_refresh_token')
        localStorage.removeItem('mfc_user_info')
    }

    function _setUserInfo(user) {
        localStorage.setItem('mfc_user_info', user)
    }
    function _getUserInfo() {
        return localStorage.getItem('mfc_user_info')
    }

    function _setLang(lang) {
        localStorage.setItem('mfc_lang', lang)
    }
    function _getLang() {
        return localStorage.getItem('mfc_lang')
    }

    return {
        getService: _getService,
        setToken: _setToken,
        setUserInfo: _setUserInfo,
        setLang: _setLang,
        getAccessToken: _getAccessToken,
        getRefreshToken: _getRefreshToken,
        getUserInfo: _getUserInfo,
        getLang: _getLang,
        clearToken: _clearToken,
    }
})()
export default LocalStorageService
