// Login Registration Foram input and error type
export type registrationInputsType = {
    name: string,
    phone: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string
}
export type registrationErrInputsType = {
    errName: string,
    errPhone: string,
    errEmail: string,
    errUsername: string,
    errPassword: string,
    errConfirmPassword: string
}

export type loginInputsType  = {
    email: string,
    password: string
  }
export type loginErrType = {
    errorEmail: string,
    errorPassword: string
  }


// Context Api Types

export type ContextApiChildrenType = {
    children: React.ReactNode;
}

// Authentication Type

export type dataType = {
    data: {
        name: string,
        phone: string,
        username: string,
        role: string,
        img: string,
    }
}

// Top Bar menu types

export type dropDownMenuValues = {
    menuIcon: React.ReactNode,
    notificationCount?: number,
    dropDownItems?: React.ReactNode
}

export type languagesType = {
    id: number,
    img: string,
    name: string,
    selected: boolean
}[]