import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_SERVICE_SWITCH_1100 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.content_service_switch_1100;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 94,
  _height: 64,
}

export function ContentServiceSwitch1100(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTENT_SERVICE_SWITCH_1100)}
    />
  )
}
