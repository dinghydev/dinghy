import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIGGER = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;align=center;verticalAlign=middle;fontSize=14;fontStyle=0;flipH=1;fillColor=#FFFFFF;whiteSpace=wrap;',
  },
  _width: 160,
  _height: 40,
}

export function Trigger(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRIGGER)} />
}
