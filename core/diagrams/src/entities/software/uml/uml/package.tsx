import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PACKAGE = {
  _style: {
    entity:
      'shape=folder;fontStyle=1;spacingTop=10;tabWidth=40;tabHeight=14;tabPosition=left;html=1;whiteSpace=wrap;',
  },
  _width: 70,
  _height: 50,
}

export function Package(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PACKAGE)} />
}
