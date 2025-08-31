import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATERIAL_PULL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.physical_pull;pointerEvents=1;',
  },
  _width: 60,
  _height: 60,
}

export function MaterialPull(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATERIAL_PULL}
      {...props}
      _style={extendStyle(MATERIAL_PULL, props)}
    />
  )
}
