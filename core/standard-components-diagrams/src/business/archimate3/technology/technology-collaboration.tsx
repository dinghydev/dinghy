import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNOLOGY_COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyCollaboration(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_COLLABORATION}
      {...props}
      _style={extendStyle(TECHNOLOGY_COLLABORATION, props)}
    />
  )
}
