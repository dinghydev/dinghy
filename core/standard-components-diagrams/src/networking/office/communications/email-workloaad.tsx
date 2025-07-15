import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EMAIL_WORKLOAAD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.email_workloaad;',
  _width: 57,
  _height: 47,
}

export function EmailWorkloaad(props: DiagramNodeProps) {
  return <Shape {...EMAIL_WORKLOAAD} {...props} />
}
