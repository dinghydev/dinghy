import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPIER = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.copier;network2IconXOffset=0.04746;network2IconYOffset=-0.00027;network2IconW=0.8861;network2IconH=0.9979;',
  },
  _width: 44.305,
  _height: 49.895,
}

export function Copier(props: DiagramNodeProps) {
  return <Shape {...COPIER} {...props} _style={extendStyle(COPIER, props)} />
}
