import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMERCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.commerce;',
  },
  _original_width: 60,
  _original_height: 52.8,
}

export function Commerce(props: DiagramNodeProps) {
  return (
    <Shape {...COMMERCE} {...props} _style={extendStyle(COMMERCE, props)} />
  )
}
