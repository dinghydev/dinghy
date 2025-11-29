import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISPLAY = {
  _style: {
    entity: 'shape=display;whiteSpace=wrap;html=1;',
  },
  _width: 80,
  _height: 40,
}

export function Display(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISPLAY)} />
}
