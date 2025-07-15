import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SHARING_WORKLOAD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.application_sharing_workload;',
  _width: 57,
  _height: 49,
}

export function ApplicationSharingWorkload(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SHARING_WORKLOAD} {...props} />
}
