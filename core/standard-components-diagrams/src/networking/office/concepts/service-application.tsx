import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_APPLICATION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.service_application;',
  _width: 59,
  _height: 48,
}

export function ServiceApplication(props: DiagramNodeProps) {
  return <Shape {...SERVICE_APPLICATION} {...props} />
}
