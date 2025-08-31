import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HARBOR = {
  _style:
    'shape=mxgraph.signs.transportation.harbor;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 90,
}

export function Harbor(props: DiagramNodeProps) {
  return <Shape {...HARBOR} {...props} _style={extendStyle(HARBOR, props)} />
}
