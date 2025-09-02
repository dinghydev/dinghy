import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.health2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Health2(props: DiagramNodeProps) {
  return (
    <Shape {...HEALTH_2} {...props} _style={extendStyle(HEALTH_2, props)} />
  )
}
