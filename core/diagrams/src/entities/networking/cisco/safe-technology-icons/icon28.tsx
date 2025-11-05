import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON28 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon28;',
  },
  _width: 50,
  _height: 21.5,
}

export function Icon28(props: NodeProps) {
  return <Shape {...ICON28} {...props} _style={extendStyle(ICON28, props)} />
}
