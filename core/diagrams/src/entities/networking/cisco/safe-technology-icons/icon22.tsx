import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON22 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon22;',
  },
  _width: 50,
  _height: 28.000000000000004,
}

export function Icon22(props: NodeProps) {
  return <Shape {...ICON22} {...props} _style={extendStyle(ICON22, props)} />
}
