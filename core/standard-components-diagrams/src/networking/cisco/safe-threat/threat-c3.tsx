import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THREAT_C3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat3;resIcon=mxgraph.cisco_safe.threat.threat_c3;',
  },
  _original_width: 50,
  _original_height: 40.5,
}

export function ThreatC3(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_C3} {...props} _style={extendStyle(THREAT_C3, props)} />
  )
}
