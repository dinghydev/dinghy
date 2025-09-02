import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MICROSCOPE = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.microscope;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 64,
  _original_height: 99,
}

export function Microscope(props: DiagramNodeProps) {
  return (
    <Shape {...MICROSCOPE} {...props} _style={extendStyle(MICROSCOPE, props)} />
  )
}
