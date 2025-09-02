import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.marketing2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Marketing2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MARKETING_2}
      {...props}
      _style={extendStyle(MARKETING_2, props)}
    />
  )
}
