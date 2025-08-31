import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.integration;',
  },
  _width: 44,
  _height: 43,
}

export function Integration(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION}
      {...props}
      _style={extendStyle(INTEGRATION, props)}
    />
  )
}
