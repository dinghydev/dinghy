import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON27 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon27;',
  },
  _width: 50,
  _height: 35,
}

export function Icon27(props: NodeProps) {
  return <Shape {...ICON27} {...props} _style={extendStyle(ICON27, props)} />
}
