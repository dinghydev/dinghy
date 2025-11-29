import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HIERARCHY = {
  _style: {
    entity: 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;',
  },
  _width: 0,
  _height: 100,
}

export function Hierarchy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HIERARCHY)} />
}
