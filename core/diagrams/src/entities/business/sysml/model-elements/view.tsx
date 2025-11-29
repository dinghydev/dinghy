import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIEW = {
  _style: {
    entity:
      'shape=folder;html=1;tabWidth=80;tabHeight=40;tabPosition=left;align=left;verticalAlign=top;spacingLeft=10;whiteSpace=wrap;',
  },
  _width: 160,
  _height: 120,
}

export function View(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIEW)} />
}
