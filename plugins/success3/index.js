module.exports = {
  onPreBuild({ utils }) {
    utils.status.show({
      title: "another one",
      summary: "yay 💃🏽",
      text: "all good here",
    });
  },
};
