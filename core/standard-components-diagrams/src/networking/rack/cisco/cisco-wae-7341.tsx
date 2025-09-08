import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_WAE_7341 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wae-7341;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoWae7341(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAE_7341}
      {...props}
      _style={extendStyle(CISCO_WAE_7341, props)}
    />
  )
}
