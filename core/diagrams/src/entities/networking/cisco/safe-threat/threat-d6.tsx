import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THREAT_D6 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat4;resIcon=mxgraph.cisco_safe.threat.threat_d6;',
  },
  _original_width: 46.5,
  _original_height: 50,
}

export function ThreatD6(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_D6} {...props} _style={extendStyle(THREAT_D6, props)} />
  )
}
