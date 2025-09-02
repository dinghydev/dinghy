import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAE_674 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wae-674;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoWae674(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAE_674}
      {...props}
      _style={extendStyle(CISCO_WAE_674, props)}
    />
  )
}
