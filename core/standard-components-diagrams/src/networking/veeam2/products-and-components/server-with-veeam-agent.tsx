import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_WITH_VEEAM_AGENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.server_with_veeam_agent;',
  _width: 40,
  _height: 52,
}

export function ServerWithVeeamAgent(props: DiagramNodeProps) {
  return <Shape {...SERVER_WITH_VEEAM_AGENT} {...props} />
}
