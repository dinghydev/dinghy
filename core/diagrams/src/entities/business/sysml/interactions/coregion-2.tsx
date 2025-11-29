import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COREGION_2 = {
  _style: {
    entity: 'shape=ellipse;html=1;fillColor=strokeColor;',
  },
  _width: 2,
  _height: 220,
}

export function Coregion2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COREGION_2)} />
}
