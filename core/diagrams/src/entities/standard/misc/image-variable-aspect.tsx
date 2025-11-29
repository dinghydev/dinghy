import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_VARIABLE_ASPECT = {
  _style: {
    entity:
      'shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=0;image=img/clipart/Gear_128x128.pngstrokeColor=none;',
  },
  _original_width: 50,
  _original_height: 60,
}

export function ImageVariableAspect(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGE_VARIABLE_ASPECT)} />
}
