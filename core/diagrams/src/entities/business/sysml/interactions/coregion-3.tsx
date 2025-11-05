import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COREGION_3 = {
  _style: {
    entity: 'edgeStyle=none;html=1;dashed=1;endArrow=none;rounded=0;',
  },
  _width: 4,
  _height: 220,
}

export function Coregion3(props: NodeProps) {
  return (
    <Shape {...COREGION_3} {...props} _style={extendStyle(COREGION_3, props)} />
  )
}
