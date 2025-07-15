import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THREAT_D8 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat4;resIcon=mxgraph.cisco_safe.threat.threat_d8;',
  _width: 46.5,
  _height: 50,
}

export function ThreatD8(props: DiagramNodeProps) {
  return <Shape {...THREAT_D8} {...props} />
}
