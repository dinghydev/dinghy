import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCANNER = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.scanner;network2IconXOffset=0.00024;network2IconYOffset=-0.08;network2IconW=1.0001;network2IconH=0.5965;',
  _width: 50.005,
  _height: 29.825000000000003,
}

export function Scanner(props: DiagramNodeProps) {
  return <Shape {...SCANNER} {...props} />
}
