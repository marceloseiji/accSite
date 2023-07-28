const getImageHash = (importPath: string) => {
  const pathToRemove = window.location.origin

  return importPath.replace(pathToRemove, '')
}

export default getImageHash
