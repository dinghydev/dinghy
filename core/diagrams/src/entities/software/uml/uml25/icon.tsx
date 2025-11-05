import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON = {
  _style: {
    entity: 'ellipse;html=1;whiteSpace=wrap;',
  },
  _width: 50,
  _height: 25,
}

export function Icon(props: NodeProps) {
  return <Shape {...ICON} {...props} _style={extendStyle(ICON, props)} />
}
