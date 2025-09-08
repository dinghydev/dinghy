import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCCESS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.success;',
  },
  _original_width: 40.800000000000004,
  _original_height: 60,
}

export function Success(props: DiagramNodeProps) {
  return <Shape {...SUCCESS} {...props} _style={extendStyle(SUCCESS, props)} />
}
