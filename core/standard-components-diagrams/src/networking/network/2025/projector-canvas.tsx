import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROJECTOR_CANVAS = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.projector_canvas;network2IconW=1;network2IconH=1.04;',
  },
  _width: 50,
  _height: 52,
}

export function ProjectorCanvas(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROJECTOR_CANVAS}
      {...props}
      _style={extendStyle(PROJECTOR_CANVAS, props)}
    />
  )
}
