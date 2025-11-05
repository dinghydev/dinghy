import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THREAT_A2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat1;resIcon=mxgraph.cisco_safe.threat.threat_a2;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function ThreatA2(props: NodeProps) {
  return (
    <Shape {...THREAT_A2} {...props} _style={extendStyle(THREAT_A2, props)} />
  )
}
