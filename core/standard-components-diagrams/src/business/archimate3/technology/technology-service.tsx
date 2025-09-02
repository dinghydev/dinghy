import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNOLOGY_SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=serv;archiType=rounded',
  },
  _original_width: 150,
  _original_height: 75,
}

export function TechnologyService(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_SERVICE}
      {...props}
      _style={extendStyle(TECHNOLOGY_SERVICE, props)}
    />
  )
}
