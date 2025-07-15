import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAGRAM_TITLE = {
  _style:
    'text;html=1;align=left;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;fontColor=#0070F2;fontFamily=Helvetica;fontStyle=1',
  _width: 120,
  _height: 30,
}

export function DiagramTitle(props: DiagramNodeProps) {
  return <Shape {...DIAGRAM_TITLE} {...props} />
}
