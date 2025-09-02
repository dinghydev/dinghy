import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUFACTURING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Manufacturing2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUFACTURING_2}
      {...props}
      _style={extendStyle(MANUFACTURING_2, props)}
    />
  )
}
