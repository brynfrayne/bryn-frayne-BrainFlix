export const formattedDate = (timestampDate) => {
    const dateMS = timestampDate;
    const date = new Date(dateMS);
    const newDate = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" +  date.getFullYear();
    return newDate;
}     

// const filteredVideoList = this.state.videoDetails.filter((video) => video.id !== this.state.videos.id)
