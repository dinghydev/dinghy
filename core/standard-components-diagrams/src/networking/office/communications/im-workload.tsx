import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IM_WORKLOAD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.im_workload;',
  _width: 56,
  _height: 54,
}

export function ImWorkload(props: DiagramNodeProps) {
  return (
    <Shape
      {...IM_WORKLOAD}
      {...props}
      _style={extendStyle(IM_WORKLOAD, props)}
    />
  )
}
