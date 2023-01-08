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

export interface DropDownMenuCotainerProps {
    headerText: string;
    buttonText:string;
    deleteSettingsText: string;
    children: React.ReactNode
}

export interface DropDownIndividualSettingsProps {
    deleteText: string;
    blockText: string;
}

// Sidebar props type

export interface SidebarDropdownProps {
    dropdownIcon: React.ReactNode,
    dropdownName: string,
    dropdownLink: string,
}
export interface SidebarMenuProps {
    menuIcon: React.ReactNode,
    menuName: string,
    menuLink?: string,
    dropdownContents?: SidebarDropdownProps[]
}