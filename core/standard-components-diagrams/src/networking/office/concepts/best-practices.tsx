import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEST_PRACTICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.best_practices;',
  },
  _width: 60,
  _height: 60,
}

export function BestPractices(props: DiagramNodeProps) {
  return (
    <Shape
      {...BEST_PRACTICES}
      {...props}
      _style={extendStyle(BEST_PRACTICES, props)}
    />
  )
}
