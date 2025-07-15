import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PYRAMID_STEP = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#10739E;strokeColor=none;',
  _width: 60,
  _height: 100,
}

export function PyramidStep(props: DiagramNodeProps) {
  return <Shape {...PYRAMID_STEP} {...props} />
}
