import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGES_SERVICE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=ellipse',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ImagesService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGES_SERVICE)} />
}
