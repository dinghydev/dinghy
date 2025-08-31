import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNOLOGY_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=proc;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_PROCESS}
      {...props}
      _style={extendStyle(TECHNOLOGY_PROCESS, props)}
    />
  )
}
