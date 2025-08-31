import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_FIXED_ASPECT = {
  _style:
    'shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=1;aspect=fixed;image=img/clipart/Gear_128x128.pngstrokeColor=none;',
  _width: 52,
  _height: 61,
}

export function ImageFixedAspect(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_FIXED_ASPECT}
      {...props}
      _style={extendStyle(IMAGE_FIXED_ASPECT, props)}
    />
  )
}
