module.exports = {
  onPreBuild({ utils }) {
    utils.build.failBuild();
  },
};
