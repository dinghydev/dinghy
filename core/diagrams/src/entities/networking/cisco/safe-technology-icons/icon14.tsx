import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON14 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon14;',
  },
  _width: 50,
  _height: 38.5,
}

export function Icon14(props: NodeProps) {
  return <Shape {...ICON14} {...props} _style={extendStyle(ICON14, props)} />
}
