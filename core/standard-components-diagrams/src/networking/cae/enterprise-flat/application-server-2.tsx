import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SERVER_2 = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.application_server2',
  _width: 43,
  _height: 50,
}

export function ApplicationServer2(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SERVER_2} {...props} />
}
