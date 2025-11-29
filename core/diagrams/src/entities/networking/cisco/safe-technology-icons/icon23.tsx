import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON23 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon23;',
  },
  _width: 50,
  _height: 23.5,
}

export function Icon23(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON23)} />
}
