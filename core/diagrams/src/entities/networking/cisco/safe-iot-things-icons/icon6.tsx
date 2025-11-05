import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON6 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon6;',
  },
  _original_width: 50,
  _original_height: 49.5,
}

export function Icon6(props: NodeProps) {
  return <Shape {...ICON6} {...props} _style={extendStyle(ICON6, props)} />
}
