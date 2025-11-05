import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Power.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 68,
}

export function Power(props: NodeProps) {
  return <Shape {...POWER} {...props} _style={extendStyle(POWER, props)} />
}
