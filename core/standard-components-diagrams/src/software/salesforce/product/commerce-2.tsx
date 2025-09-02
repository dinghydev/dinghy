import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMERCE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.commerce2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Commerce2(props: DiagramNodeProps) {
  return (
    <Shape {...COMMERCE_2} {...props} _style={extendStyle(COMMERCE_2, props)} />
  )
}
