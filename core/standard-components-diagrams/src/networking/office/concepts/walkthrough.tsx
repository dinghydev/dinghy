import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALKTHROUGH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.walkthrough;',
  },
  _original_width: 41,
  _original_height: 58,
}

export function Walkthrough(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALKTHROUGH}
      {...props}
      _style={extendStyle(WALKTHROUGH, props)}
    />
  )
}
