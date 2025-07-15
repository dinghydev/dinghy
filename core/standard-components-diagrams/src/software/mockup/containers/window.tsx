import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOW = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.containers.window;align=left;verticalAlign=top;spacingLeft=8;strokeColor2=#008cff;strokeColor3=#c4c4c4;fontColor=#666666;mainText=;fontSize=17;labelBackgroundColor=none;whiteSpace=wrap;',
  _width: 550,
  _height: 380,
}

export function Window(props: DiagramNodeProps) {
  return <Shape {...WINDOW} {...props} />
}
