import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THREAT_B3 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat2;resIcon=mxgraph.cisco_safe.threat.threat_b3;',
  _width: 31.5,
  _height: 50,
}

export function ThreatB3(props: DiagramNodeProps) {
  return <Shape {...THREAT_B3} {...props} />
}
