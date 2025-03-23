import type { Props } from '@reactiac/base-components'
import { _background } from './_background.js'
import { _color } from './_color.js'
import { _dashed } from './_dahsed.js'
import { _direction } from './_direction.js'
import { _border } from './_border.js'
import { _style } from './_style.js'
import { _shape } from './_shape.js'
import { _icon } from './_icon.js'
import { _display } from './_display.js'
import { _width } from './_width.js'
import { _height } from './_height.js'
import { _arrow } from './_arrow.js'
import { _distribution } from './_distribution.js'
import { eventHandler } from './eventHandler.js'
import { _image } from './_image.js'
import { simpleStyleAttribute } from './simpleStyleAttribute.js'
import { DrawioRenderOptions } from '../types.js'

const attributesHandlers: Props = {
  _color,
  _dashed,
  _background,
  _direction,
  _border,
  _style,
  _shape,
  _icon,
  _display,
  _width,
  _height,
  _arrow,
  _distribution,
  _image,
  _align: simpleStyleAttribute('align'),
  _verticalAlign: simpleStyleAttribute('verticalAlign'),
  _beforeGenerate: eventHandler,
}

export function handleAttributes(
  drawioConfig: Props,
  configs: Props[],
  options: DrawioRenderOptions,
) {
  for (const key of Object.keys(drawioConfig)) {
    const attributeFunction = attributesHandlers[key] as
      | ((args: unknown,options:unknown) => Props)
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
