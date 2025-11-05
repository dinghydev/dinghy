import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSESSMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=assess',
  },
  _width: 100,
  _height: 75,
}

export function Assessment(props: NodeProps) {
  return (
    <Shape {...ASSESSMENT} {...props} _style={extendStyle(ASSESSMENT, props)} />
  )
}
