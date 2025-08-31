import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_E5 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat5;resIcon=mxgraph.cisco_safe.threat.threat_e5;',
  _width: 50,
  _height: 47,
}

export function ThreatE5(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_E5} {...props} _style={extendStyle(THREAT_E5, props)} />
  )
}
