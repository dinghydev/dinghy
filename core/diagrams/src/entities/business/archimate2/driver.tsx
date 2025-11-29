import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRIVER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=driver',
  },
  _width: 100,
  _height: 75,
}

export function Driver(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DRIVER)} />
}
