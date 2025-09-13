import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THREAT_B2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat2;resIcon=mxgraph.cisco_safe.threat.threat_b2;',
  },
  _width: 31.5,
  _height: 50,
}

export function ThreatB2(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_B2} {...props} _style={extendStyle(THREAT_B2, props)} />
  )
}
