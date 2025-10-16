import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTION_SHEET_2 = {
  _style: {
    entity:
      'shape=rect;rSize=3;strokeColor=none;fillColor=#D2D3D5;gradientColor=none;shadow=0;',
  },
  _width: 164,
  _height: 115,
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
