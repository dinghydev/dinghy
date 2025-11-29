import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPLOYMENT = {
  _style: {
    entity:
      'verticalAlign=top;align=left;shape=cube;size=10;direction=south;fontStyle=0;html=1;boundedLbl=1;spacingLeft=5;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 140,
}

export function Deployment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEPLOYMENT)} />
}
