import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const START = {
  _style: {
    entity:
      'ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;',
  },
  _width: 0,
  _height: 90,
}

export function Start(props: NodeProps) {
  return <Shape {...START} {...props} _style={extendStyle(START, props)} />
}
