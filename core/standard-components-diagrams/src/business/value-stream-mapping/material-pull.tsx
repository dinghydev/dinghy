import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATERIAL_PULL = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.physical_pull;pointerEvents=1;',
  _width: 100,
  _height: 100,
}

export function MaterialPull(props: DiagramNodeProps) {
  return <Shape {...MATERIAL_PULL} {...props} />
}
