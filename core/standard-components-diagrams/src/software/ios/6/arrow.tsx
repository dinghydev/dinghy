import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iArrowIcon;fillColor=#8BbEff;fillColor2=#135Ec8;strokeColor=#ffffff;sketch=0;',
  _width: 15,
  _height: 15,
}

export function Arrow(props: DiagramNodeProps) {
  return <Shape {...ARROW} {...props} />
}
