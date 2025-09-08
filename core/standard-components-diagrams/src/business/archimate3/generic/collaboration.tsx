import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Collaboration(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLLABORATION}
      {...props}
      _style={extendStyle(COLLABORATION, props)}
    />
  )
}
