import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOMOTIVE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automotive2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Automotive2(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOMOTIVE_2}
      {...props}
      _style={extendStyle(AUTOMOTIVE_2, props)}
    />
  )
}
