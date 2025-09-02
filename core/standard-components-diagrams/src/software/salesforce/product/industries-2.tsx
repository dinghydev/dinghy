import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.industries2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Industries2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIES_2}
      {...props}
      _style={extendStyle(INDUSTRIES_2, props)}
    />
  )
}
