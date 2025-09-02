import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTNERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.partners;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Partners(props: DiagramNodeProps) {
  return (
    <Shape {...PARTNERS} {...props} _style={extendStyle(PARTNERS, props)} />
  )
}
