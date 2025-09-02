import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_SELECT_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=30;fontColor=#000000;align=left',
  },
  _original_width: 1,
  _original_height: 390,
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
