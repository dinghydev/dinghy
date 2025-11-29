import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_DOWN = {
  _style: {
    entity: 'shape=singleArrow;direction=south;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 100,
}

export function ArrowDown(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_DOWN)} />
}
