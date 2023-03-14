import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
    if(requestUser.userId===resourceUserId.toString())return
    throw new UnauthenticatedError('not authorized to access this content')
}

export default checkPermissions