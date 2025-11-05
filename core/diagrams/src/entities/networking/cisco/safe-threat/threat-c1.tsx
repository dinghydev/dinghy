import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THREAT_C1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat3;resIcon=mxgraph.cisco_safe.threat.threat_c1;',
  },
  _original_width: 50,
  _original_height: 40.5,
}

export function ThreatC1(props: NodeProps) {
  return (
    <Shape {...THREAT_C1} {...props} _style={extendStyle(THREAT_C1, props)} />
  )
}
