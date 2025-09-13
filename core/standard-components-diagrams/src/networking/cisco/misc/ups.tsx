import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ups;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 51,
}

export function Ups(props: DiagramNodeProps) {
  return <Shape {...UPS} {...props} _style={extendStyle(UPS, props)} />
}
