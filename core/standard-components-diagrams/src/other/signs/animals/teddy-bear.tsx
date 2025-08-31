import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEDDY_BEAR = {
  _style:
    'shape=mxgraph.signs.animals.teddy_bear;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 69,
  _height: 99,
}

export function TeddyBear(props: DiagramNodeProps) {
  return (
    <Shape {...TEDDY_BEAR} {...props} _style={extendStyle(TEDDY_BEAR, props)} />
  )
}
