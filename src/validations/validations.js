export const EMAIL = /^(?! )([a-zA-Z0-9])\w*([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
export const PASSWORD = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
export const NAME = /^(?! )([a-zA-ZáéíóúÁÉÍÓÚñÑ]+ ?){1,3}$/
export const PHONE = /^(?! )[0-9]{10}$/
export const DNI = /^[0-9]{8}$/
export const CIUDAD = /^(?![0-9\W])[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*(?:[\s-][A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+)*$/

