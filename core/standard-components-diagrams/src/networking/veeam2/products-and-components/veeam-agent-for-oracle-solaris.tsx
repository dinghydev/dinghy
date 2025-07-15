import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_AGENT_FOR_ORACLE_SOLARIS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_agent_for_oracle_solaris;',
  _width: 34,
  _height: 34,
}

export function VeeamAgentForOracleSolaris(props: DiagramNodeProps) {
  return <Shape {...VEEAM_AGENT_FOR_ORACLE_SOLARIS} {...props} />
}
