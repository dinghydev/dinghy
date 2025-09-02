import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.marketing;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Marketing(props: DiagramNodeProps) {
  return (
    <Shape {...MARKETING} {...props} _style={extendStyle(MARKETING, props)} />
  )
}
