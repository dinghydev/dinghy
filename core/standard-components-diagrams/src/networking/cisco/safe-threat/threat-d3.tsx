import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_D3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#F06650;strokeColor=#ffffff;verticalAlign=top;align=center;points=[];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=threat4;resIcon=mxgraph.cisco_safe.threat.threat_d3;',
  },
  _width: 46.5,
  _height: 50,
}

export function ThreatD3(props: DiagramNodeProps) {
  return (
    <Shape {...THREAT_D3} {...props} _style={extendStyle(THREAT_D3, props)} />
  )
}
