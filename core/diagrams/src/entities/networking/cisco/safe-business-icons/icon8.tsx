import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON8 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon8;',
  },
  _width: 38.5,
  _height: 50,
}

export function Icon8(props: NodeProps) {
  return <Shape {...ICON8} {...props} _style={extendStyle(ICON8, props)} />
}
