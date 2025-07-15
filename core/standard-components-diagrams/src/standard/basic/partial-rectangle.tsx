import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_RECTANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rect;fillColor2=none;strokeWidth=1;size=20;indent=5;',
  _width: 120,
  _height: 60,
}

export function PartialRectangle(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_RECTANGLE} {...props} />
}
