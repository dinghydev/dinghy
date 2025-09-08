import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PYRAMID_STEP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function PyramidStep(props: DiagramNodeProps) {
  return (
    <Shape
      {...PYRAMID_STEP}
      {...props}
      _style={extendStyle(PYRAMID_STEP, props)}
    />
  )
}
