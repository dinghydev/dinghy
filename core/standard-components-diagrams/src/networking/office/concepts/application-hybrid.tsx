import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_HYBRID = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.application_hybrid;',
  },
  _width: 59,
  _height: 44,
}

export function ApplicationHybrid(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_HYBRID}
      {...props}
      _style={extendStyle(APPLICATION_HYBRID, props)}
    />
  )
}
