import type { Props } from '@dinghy/base-components'
import { _background } from './_background.ts'
import { _color } from './_color.ts'
import { _direction } from './_direction.ts'
import { _style } from './_style.ts'
import { _display } from './_display.ts'
import { _width } from './_width.ts'
import { _height } from './_height.ts'
import { _x } from './_x.ts'
import { _y } from './_y.ts'
import { _arrow } from './_arrow.ts'
import { _distributed } from './_distributed.ts'
import { _image } from './_image.ts'
import { _mxGraphModel } from './_mxGraphModel.ts'
import { simpleStyleAttribute } from './simpleStyleAttribute.ts'
import { DrawioRenderOptions } from '../types.ts'

const noOp = () => {
  return null
}

const attributesHandlers: Props = {
  _color,
  _background,
  _direction,
  _style,
  _display,
  _width,
  _height,
  _arrow,
  _distributed,
  _image,
  _mxGraphModel,
  _align: simpleStyleAttribute('align'),
  _verticalAlign: simpleStyleAttribute('verticalAlign'),
  _beforeGenerate: noOp,
  _view: noOp,
  _x,
  _y,
}

export function handleAttributes(
  drawioConfig: Props,
  configs: Props[],
  options: DrawioRenderOptions,
) {
  for (const key of Object.keys(drawioConfig)) {
    const attributeFunction = attributesHandlers[key] as
      | ((args: unknown, options: unknown) => Props)
      | undefined
    if (attributeFunction) {
      const config = attributeFunction(drawioConfig[key], options)
      if (config) {
        configs.push(config)
      }
    } else if (key !== '_diagram') {
      throw new Error(`Attribute ${key} is not implemented`)
    }
  }
}
