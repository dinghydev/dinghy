import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIMED_SPRUCE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/limed_spruce.svg;strokeColor=none;',
  },
  _width: 300,
  _height: 68,
}

export function LimedSpruce(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIMED_SPRUCE)} />
}
