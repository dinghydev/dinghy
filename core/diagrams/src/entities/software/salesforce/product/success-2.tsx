import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCCESS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.success2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Success2(props: DiagramNodeProps) {
  return (
    <Shape {...SUCCESS_2} {...props} _style={extendStyle(SUCCESS_2, props)} />
  )
}
