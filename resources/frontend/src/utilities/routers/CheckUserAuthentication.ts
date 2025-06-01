export const checkUserAuthentication = (isAuthenticated: boolean) => {
    return isAuthenticated;
}


export const checkUserTokenNotEmpty = (userToken: string) => {
    return userToken !== "";
}

export const checkUserIsAdmin = (userRole: number) => {
    return userRole === 1;
}
