import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLANK_ONE_LINE = {
  _style: {
    entity:
      'dashed=0;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;labelPosition=center;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=5;fontSize=12;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 44,
}

export function BlankOneLine(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLANK_ONE_LINE}
      {...props}
      _style={extendStyle(BLANK_ONE_LINE, props)}
    />
  )
}
