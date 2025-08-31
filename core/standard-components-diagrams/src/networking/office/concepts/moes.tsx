import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.moes;',
  },
  _width: 40,
  _height: 47,
}

export function Moes(props: DiagramNodeProps) {
  return <Shape {...MOES} {...props} _style={extendStyle(MOES, props)} />
}
