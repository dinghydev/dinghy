import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON29 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon29;',
  },
  _width: 50,
  _height: 37,
}

export function Icon29(props: NodeProps) {
  return <Shape {...ICON29} {...props} _style={extendStyle(ICON29, props)} />
}
