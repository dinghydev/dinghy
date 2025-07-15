import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VBO_REPOSITORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbo_repository;',
  _width: 37,
  _height: 38,
}

export function VboRepository(props: DiagramNodeProps) {
  return <Shape {...VBO_REPOSITORY} {...props} />
}
