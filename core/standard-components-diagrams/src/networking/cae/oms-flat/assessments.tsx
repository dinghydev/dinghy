import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSESSMENTS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.assessments',
  },
  _width: 47,
  _height: 50,
}

export function Assessments(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSESSMENTS}
      {...props}
      _style={extendStyle(ASSESSMENTS, props)}
    />
  )
}
