import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.collaboration;',
  },
  _width: 60,
  _height: 35,
}

export function Collaboration(props: NodeProps) {
  return (
    <Shape
      {...COLLABORATION}
      {...props}
      _style={extendStyle(COLLABORATION, props)}
    />
  )
}
