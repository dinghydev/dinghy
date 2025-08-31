import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_A4 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat1;resIcon=mxgraph.cisco_safe.threat.threat_a4;',
  _width: 49,
  _height: 50,
}

export function ThreatA4(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_A4} {...props} _style={extendStyle(THREAT_A4, props)} />
  )
}
