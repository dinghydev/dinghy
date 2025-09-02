import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATIONS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.communications2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Communications2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS_2}
      {...props}
      _style={extendStyle(COMMUNICATIONS_2, props)}
    />
  )
}
