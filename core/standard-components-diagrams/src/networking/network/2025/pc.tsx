import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PC = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.pc;network2IconYOffset=-0.0593;network2IconW=0.9999;network2IconH=0.7096;',
  },
  _original_width: 49.995,
  _original_height: 35.480000000000004,
}

export function Pc(props: DiagramNodeProps) {
  return <Shape {...PC} {...props} _style={extendStyle(PC, props)} />
}
