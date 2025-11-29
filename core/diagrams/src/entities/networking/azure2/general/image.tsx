import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Image.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 44,
}

export function Image(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGE)} />
}
