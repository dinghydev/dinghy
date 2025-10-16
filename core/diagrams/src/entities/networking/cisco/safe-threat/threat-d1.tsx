import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THREAT_D1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat4;resIcon=mxgraph.cisco_safe.threat.threat_d1;',
  },
  _original_width: 46.5,
  _original_height: 50,
}

export function ThreatD1(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_D1} {...props} _style={extendStyle(THREAT_D1, props)} />
  )
}
