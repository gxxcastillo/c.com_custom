import * as common from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map'
});
