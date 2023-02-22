
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';//图片懒加载

export default function install(app){
  app.use(Vant);
  
  app.use(Lazyload, {
    lazyComponent: true,
    preLoad: 1,
    attempt: 1,
  });
}