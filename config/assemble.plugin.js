
import assemble from 'assemble'
import extname from 'gulp-extname'
import projectPaths from './paths.config'

const app = assemble()

function handleAssemble(params) {

  const { baseLayout } = params.options
  const { basePages } = params.options
  const { partialsLayout } = params.options
  const { partialsData } = params.options
  const { helpers } = params.options
  const outputPath = projectPaths.dist

  app.layouts(baseLayout)
  app.pages(basePages)
  app.partials(partialsLayout)
  app.data(partialsData)
  app.helpers(helpers)

  app
    .toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest(outputPath))
}

function AssembleWebpack(options) {
  this.options = options;
}

AssembleWebpack.prototype.apply = function myFn(compiler) {
  compiler.plugin('compilation', stats => {
    handleAssemble({
      webpackConfig: compiler,
      options: this.options
    });
    console.log('Completed : Assemble.io Tasks')
  });
};

export default AssembleWebpack
