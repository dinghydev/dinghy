import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_BOX = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.textBox;fontColor=#666666;align=left;fontSize=17;spacingLeft=4;spacingTop=-3;whiteSpace=wrap;strokeColor=#666666;mainText=',
  },
  _width: 150,
  _height: 30,
}

export function TextBox(props: DiagramNodeProps) {
  return (
    <Shape {...TEXT_BOX} {...props} _style={extendStyle(TEXT_BOX, props)} />
  )
}
