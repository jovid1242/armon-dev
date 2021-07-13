const validate = {
    modalValidation: (state) => {
        if (!state.username) {
            return { error: true, message: 'Запольните поле имя' };
        }
        if (!state.phone) {
            return { error: true, message: 'Запольните поле телефона' };
        }
        const re = /^((992|\+992)[\- ]?)?[\d\- ]{5,10}$/;
        if (!re.test(state.phone)) {
            return { error: true, message: 'Неверный номер телефон!! Пример: +992XXXXXXXXX' }
        }
        if (state.phone.length < 13) {
            return { error: true, message: 'Номер телефон дольжен содержать минимум 13 символов ' };
        }
        if (state.phone.length > 13) {
            return { error: true, message: 'Номер телефон дольжен содержать не больше 13 символов' };
        }
        return { error: false, message: 'Успешно' };
    }
}

export default validate