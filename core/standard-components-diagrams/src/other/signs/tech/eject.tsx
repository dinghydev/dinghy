import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EJECT = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.eject;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 77,
}

export function Eject(props: DiagramNodeProps) {
  return <Shape {...EJECT} {...props} _style={extendStyle(EJECT, props)} />
}
