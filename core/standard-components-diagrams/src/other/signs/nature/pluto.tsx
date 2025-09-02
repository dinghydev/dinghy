import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLUTO = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.pluto;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 63,
  _original_height: 98,
}

export function Pluto(props: DiagramNodeProps) {
  return <Shape {...PLUTO} {...props} _style={extendStyle(PLUTO, props)} />
}
