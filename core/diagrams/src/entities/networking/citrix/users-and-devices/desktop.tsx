import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESKTOP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.desktop;',
  },
  _width: 50,
  _height: 38.66,
}

export function Desktop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DESKTOP)} />
}
