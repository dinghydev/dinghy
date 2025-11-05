import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON24 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon24;',
  },
  _width: 50,
  _height: 31,
}

export function Icon24(props: NodeProps) {
  return <Shape {...ICON24} {...props} _style={extendStyle(ICON24, props)} />
}
