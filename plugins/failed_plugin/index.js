module.exports = {
  onPreBuild({ utils }) {
    utils.build.failPlugin();
  },
};
