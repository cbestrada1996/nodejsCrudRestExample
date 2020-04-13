
export const authMiddleware = (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  }


