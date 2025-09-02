import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_SOLIDS_LIQUIDS_GASES = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container_(solids,_liquids,_gases);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 150,
  _original_height: 50,
}

export function ContainerSolidsLiquidsGases(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_SOLIDS_LIQUIDS_GASES}
      {...props}
      _style={extendStyle(CONTAINER_SOLIDS_LIQUIDS_GASES, props)}
    />
  )
}
