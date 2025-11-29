import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_SOLIDS_LIQUIDS_GASES = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container_(solids,_liquids,_gases);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 150,
  _height: 50,
}

export function ContainerSolidsLiquidsGases(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTAINER_SOLIDS_LIQUIDS_GASES)}
    />
  )
}
