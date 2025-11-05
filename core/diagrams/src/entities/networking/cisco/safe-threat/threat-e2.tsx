import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THREAT_E2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat5;resIcon=mxgraph.cisco_safe.threat.threat_e2;',
  },
  _original_width: 50,
  _original_height: 47,
}

export function ThreatE2(props: NodeProps) {
  return (
    <Shape {...THREAT_E2} {...props} _style={extendStyle(THREAT_E2, props)} />
  )
}
