
export const ShouldBeTreeShakenOutModule = () => {
    return "Should Not Be in Build: ShouldBeTreeShakenOut Module"
}

const ShouldBeTreeShakenOutDefaultExport = () => {
    return "Should Not Be in Build: Default Export"
}

export default ShouldBeTreeShakenOutDefaultExport