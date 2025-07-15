import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THREAT_D4 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat4;resIcon=mxgraph.cisco_safe.threat.threat_d4;',
  _width: 46.5,
  _height: 50,
}

export function ThreatD4(props: DiagramNodeProps) {
  return <Shape {...THREAT_D4} {...props} />
}
