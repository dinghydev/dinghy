import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLUTO = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.pluto;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 63,
  _height: 98,
}

export function Pluto(props: DiagramNodeProps) {
  return <Shape {...PLUTO} {...props} _style={extendStyle(PLUTO, props)} />
}
