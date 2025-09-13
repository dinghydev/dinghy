import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MICROSCOPE = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.microscope;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 64,
  _height: 99,
}

export function Microscope(props: DiagramNodeProps) {
  return (
    <Shape {...MICROSCOPE} {...props} _style={extendStyle(MICROSCOPE, props)} />
  )
}
