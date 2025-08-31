import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_SELECT_2 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=30;fontColor=#000000;align=left',
  _width: 1,
  _height: 390,
}

export function MultiSelect2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_SELECT_2}
      {...props}
      _style={extendStyle(MULTI_SELECT_2, props)}
    />
  )
}
