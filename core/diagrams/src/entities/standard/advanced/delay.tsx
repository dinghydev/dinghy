import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELAY = {
  _style: {
    entity: 'shape=delay;whiteSpace=wrap;html=1;',
  },
  _width: 80,
  _height: 40,
}

export function Delay(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DELAY)} />
}
