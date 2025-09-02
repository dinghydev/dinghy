import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_B7 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat2;resIcon=mxgraph.cisco_safe.threat.threat_b7;',
  },
  _original_width: 31.5,
  _original_height: 50,
}

export function ThreatB7(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_B7} {...props} _style={extendStyle(THREAT_B7, props)} />
  )
}
