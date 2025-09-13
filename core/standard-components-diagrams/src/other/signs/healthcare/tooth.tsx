import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOOTH = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.tooth;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 80,
  _height: 101,
}

export function Tooth(props: DiagramNodeProps) {
  return <Shape {...TOOTH} {...props} _style={extendStyle(TOOTH, props)} />
}
