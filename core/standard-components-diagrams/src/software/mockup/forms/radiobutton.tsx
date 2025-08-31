import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIOBUTTON = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#eeeeee;strokeColor=#999999;gradientColor=#cccccc;html=1;align=left;spacingLeft=4;fontSize=17;fontColor=#666666;labelPosition=right;shadow=0;',
  },
  _width: 15,
  _height: 15,
}

export function Radiobutton(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIOBUTTON}
      {...props}
      _style={extendStyle(RADIOBUTTON, props)}
    />
  )
}
