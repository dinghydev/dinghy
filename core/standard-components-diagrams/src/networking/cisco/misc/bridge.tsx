import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRIDGE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.bridge;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 74,
  _height: 56,
}

export function Bridge(props: DiagramNodeProps) {
  return <Shape {...BRIDGE} {...props} _style={extendStyle(BRIDGE, props)} />
}
