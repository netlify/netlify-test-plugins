module.exports = {
  onPreBuild({ utils }) {
    utils.status.show({
      title: "a successful plugin",
      summary: "yay 💃🏽",
      text: "all good here",
    });
  },
};
