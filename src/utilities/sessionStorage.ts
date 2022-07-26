function saveStorageAuthorizationStatus(status: boolean): void {
	const isAuthorized: string = JSON.stringify(status);
	sessionStorage.setItem('isAuthorized', isAuthorized);
}

export { saveStorageAuthorizationStatus };