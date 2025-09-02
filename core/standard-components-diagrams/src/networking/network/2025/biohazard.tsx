import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIOHAZARD = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.biohazard;network2IconXOffset=-0.0048;network2IconYOffset=-0.001;network2IconW=1.0124;network2IconH=0.93;',
  },
  _original_width: 50.62,
  _original_height: 46.5,
}

export function Biohazard(props: DiagramNodeProps) {
  return (
    <Shape {...BIOHAZARD} {...props} _style={extendStyle(BIOHAZARD, props)} />
  )
}
