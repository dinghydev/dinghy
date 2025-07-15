import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTION_SHEET_2 = {
  _style:
    'shape=rect;rSize=3;strokeColor=none;fillColor=#D2D3D5;gradientColor=none;shadow=0;',
  _width: 164,
  _height: 115,
}

export function ActionSheet2(props: DiagramNodeProps) {
  return <Shape {...ACTION_SHEET_2} {...props} />
}
