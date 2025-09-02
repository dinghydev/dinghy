import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_FINAL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.flowFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function FlowFinal(props: DiagramNodeProps) {
  return (
    <Shape {...FLOW_FINAL} {...props} _style={extendStyle(FLOW_FINAL, props)} />
  )
}
