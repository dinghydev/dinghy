import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_AGENT_FOR_IBM_AIX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_agent_for_ibm_aix;',
  _width: 34,
  _height: 34,
}

export function VeeamAgentForIbmAix(props: DiagramNodeProps) {
  return <Shape {...VEEAM_AGENT_FOR_IBM_AIX} {...props} />
}
