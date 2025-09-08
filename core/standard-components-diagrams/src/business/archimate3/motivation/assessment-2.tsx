import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSESSMENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.assess;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Assessment2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSESSMENT_2}
      {...props}
      _style={extendStyle(ASSESSMENT_2, props)}
    />
  )
}
