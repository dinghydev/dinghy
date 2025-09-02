import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_VARIABLE_ASPECT = {
  _style: {
    entity:
      'shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=0;image=img/clipart/Gear_128x128.pngstrokeColor=none;',
  },
  _original_width: 50,
  _original_height: 60,
}

export function ImageVariableAspect(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_VARIABLE_ASPECT}
      {...props}
      _style={extendStyle(IMAGE_VARIABLE_ASPECT, props)}
    />
  )
}
