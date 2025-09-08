import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSESSMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=assess',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Assessment(props: DiagramNodeProps) {
  return (
    <Shape {...ASSESSMENT} {...props} _style={extendStyle(ASSESSMENT, props)} />
  )
}
