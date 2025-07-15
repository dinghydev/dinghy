import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THREAT_E1 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat5;resIcon=mxgraph.cisco_safe.threat.threat_e1;',
  _width: 50,
  _height: 47,
}

export function ThreatE1(props: DiagramNodeProps) {
  return <Shape {...THREAT_E1} {...props} />
}
