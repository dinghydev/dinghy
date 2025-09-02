import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_SHEET_2 = {
  _style: {
    entity:
      'shape=rect;rSize=3;strokeColor=none;fillColor=#D2D3D5;gradientColor=none;shadow=0;',
  },
  _original_width: 164,
  _original_height: 115,
}

export function ActionSheet2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_SHEET_2}
      {...props}
      _style={extendStyle(ACTION_SHEET_2, props)}
    />
  )
}
