
import AssembleWebpack from './assemble.plugin'

function assembleLoaderTest(source, map) {
  return '// This will allow webpack to watch the files and re-run respective plugins for Assemble';
};

assembleLoaderTest.AttachedPlugin = AssembleWebpack;

export default assembleLoaderTest
