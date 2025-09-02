import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOVERNMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.government;',
  },
  _original_width: 51.6,
  _original_height: 60,
}

export function Government(props: DiagramNodeProps) {
  return (
    <Shape {...GOVERNMENT} {...props} _style={extendStyle(GOVERNMENT, props)} />
  )
}
