import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_A8 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat1;resIcon=mxgraph.cisco_safe.threat.threat_a8;',
  _width: 49,
  _height: 50,
}

export function ThreatA8(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_A8} {...props} _style={extendStyle(THREAT_A8, props)} />
  )
}
