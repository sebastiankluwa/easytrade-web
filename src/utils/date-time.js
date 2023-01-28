export const convertDateToTimeAgo = (date) => {
    const currentTime = new Date().getTime();
    const dateTime = new Date(date).getTime();
    const timeDifference = currentTime - dateTime;
    
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursAgo >= 1) {
      return `${hoursAgo} hours ago`;
    }
    
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    if (minutesAgo >= 1) {
      return `${minutesAgo} minutes ago`;
    }
    
    return "Just now";
  }