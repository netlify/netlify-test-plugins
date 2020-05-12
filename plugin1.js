module.exports = {
  onPreBuild({ utils }) {
    utils.build.failPlugin()
  },
  onBuild({ utils }) {
    utils.build.failBuild()
  },
  onPostBuild({ utils }) {
    utils.build.failPlugin()
  },
}