module.exports = {
  onPreBuild({ utils }) {
    utils.build.cancelBuild();
  },
};
