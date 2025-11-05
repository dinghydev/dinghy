import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON41 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon41;',
  },
  _width: 28.999999999999996,
  _height: 50,
}

export function Icon41(props: NodeProps) {
  return <Shape {...ICON41} {...props} _style={extendStyle(ICON41, props)} />
}
