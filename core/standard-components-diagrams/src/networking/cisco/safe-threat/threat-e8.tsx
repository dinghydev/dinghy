import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_E8 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat5;resIcon=mxgraph.cisco_safe.threat.threat_e8;',
  },
  _original_width: 50,
  _original_height: 47,
}

export function ThreatE8(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_E8} {...props} _style={extendStyle(THREAT_E8, props)} />
  )
}
