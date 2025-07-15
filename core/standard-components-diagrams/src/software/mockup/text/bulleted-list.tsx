import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BULLETED_LIST = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.bulletedList;textColor=#666666;mainText=,,,,;textSize=17;bulletStyle=none;strokeColor=none;fillColor=none;align=left;verticalAlign=top;fontSize=17;fontColor=#666666;',
  _width: 150,
  _height: 135,
}

export function BulletedList(props: DiagramNodeProps) {
  return <Shape {...BULLETED_LIST} {...props} />
}
