import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_SOLIDS_LIQUIDS_GASES = {
  _style:
    'shape=mxgraph.pid.vessels.container_(solids,_liquids,_gases);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 150,
  _height: 50,
}

export function ContainerSolidsLiquidsGases(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_SOLIDS_LIQUIDS_GASES} {...props} />
}
