import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIGHTBULB = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.lightbulb;',
  _width: 22.8,
  _height: 29.7,
}

export function Lightbulb(props: DiagramNodeProps) {
  return <Shape {...LIGHTBULB} {...props} />
}
