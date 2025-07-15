import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_SERVER = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.web_server',
  _width: 38,
  _height: 50,
}

export function WebServer(props: DiagramNodeProps) {
  return <Shape {...WEB_SERVER} {...props} />
}
