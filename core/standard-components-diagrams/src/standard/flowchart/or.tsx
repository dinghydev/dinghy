import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.summing_function;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} _style={extendStyle(OR, props)} />
}
