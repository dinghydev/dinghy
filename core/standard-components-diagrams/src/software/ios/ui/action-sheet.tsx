import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_SHEET = {
  _style: {
    entity:
      'shape=rect;rSize=3;strokeColor=none;fillColor=#D2D3D5;gradientColor=none;shadow=0;html=1;',
  },
  _width: 164,
  _height: 115,
}

export function ActionSheet(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_SHEET}
      {...props}
      _style={extendStyle(ACTION_SHEET, props)}
    />
  )
}
