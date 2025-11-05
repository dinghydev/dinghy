import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LABEL = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _width: 80,
  _height: 20,
}

export function Label(props: NodeProps) {
  return <Shape {...LABEL} {...props} _style={extendStyle(LABEL, props)} />
}
