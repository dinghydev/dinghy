import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_C2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat3;resIcon=mxgraph.cisco_safe.threat.threat_c2;',
  },
  _width: 50,
  _height: 40.5,
}

export function ThreatC2(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_C2} {...props} _style={extendStyle(THREAT_C2, props)} />
  )
}
