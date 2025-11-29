import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_FIXED_ASPECT = {
  _style: {
    entity:
      'shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=1;aspect=fixed;image=img/clipart/Gear_128x128.pngstrokeColor=none;',
  },
  _original_width: 52,
  _original_height: 61,
}

export function ImageFixedAspect(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGE_FIXED_ASPECT)} />
}
