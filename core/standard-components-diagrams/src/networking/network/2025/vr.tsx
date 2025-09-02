import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VR = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.vr;network2IconYOffset=-0.015;network2IconW=1;network2IconH=0.45;',
  },
  _original_width: 50,
  _original_height: 22.5,
}

export function Vr(props: DiagramNodeProps) {
  return <Shape {...VR} {...props} _style={extendStyle(VR, props)} />
}
