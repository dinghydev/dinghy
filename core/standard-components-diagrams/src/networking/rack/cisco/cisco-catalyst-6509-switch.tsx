import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_CATALYST_6509_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6509_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 148,
  _height: 223,
}

export function CiscoCatalyst6509Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_6509_SWITCH}
      {...props}
      _style={extendStyle(CISCO_CATALYST_6509_SWITCH, props)}
    />
  )
}
