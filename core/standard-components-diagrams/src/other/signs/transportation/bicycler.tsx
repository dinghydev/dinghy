import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BICYCLER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycler;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 95,
  _original_height: 98,
}

export function Bicycler(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLER} {...props} _style={extendStyle(BICYCLER, props)} />
  )
}
