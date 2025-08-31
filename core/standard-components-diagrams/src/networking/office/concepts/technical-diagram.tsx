import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNICAL_DIAGRAM = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.technical_diagram;',
  _width: 50,
  _height: 56,
}

export function TechnicalDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNICAL_DIAGRAM}
      {...props}
      _style={extendStyle(TECHNICAL_DIAGRAM, props)}
    />
  )
}
