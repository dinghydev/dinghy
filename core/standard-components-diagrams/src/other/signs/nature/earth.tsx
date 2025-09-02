import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EARTH = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.earth;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Earth(props: DiagramNodeProps) {
  return <Shape {...EARTH} {...props} _style={extendStyle(EARTH, props)} />
}
