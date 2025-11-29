import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON6 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon6;',
  },
  _width: 28.999999999999996,
  _height: 50,
}

export function Icon6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON6)} />
}
