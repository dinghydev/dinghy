import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLATFORM_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.platform2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Platform2(props: DiagramNodeProps) {
  return (
    <Shape {...PLATFORM_2} {...props} _style={extendStyle(PLATFORM_2, props)} />
  )
}
