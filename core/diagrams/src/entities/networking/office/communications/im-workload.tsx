import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IM_WORKLOAD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.im_workload;',
  },
  _original_width: 56,
  _original_height: 54,
}

export function ImWorkload(props: NodeProps) {
  return (
    <Shape
      {...IM_WORKLOAD}
      {...props}
      _style={extendStyle(IM_WORKLOAD, props)}
    />
  )
}
