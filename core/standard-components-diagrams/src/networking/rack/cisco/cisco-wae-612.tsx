import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAE_612 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wae-612;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoWae612(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAE_612}
      {...props}
      _style={extendStyle(CISCO_WAE_612, props)}
    />
  )
}
