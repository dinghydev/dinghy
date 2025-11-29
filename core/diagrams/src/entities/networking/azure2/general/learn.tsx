import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LEARN = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Learn.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 70,
}

export function Learn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LEARN)} />
}
