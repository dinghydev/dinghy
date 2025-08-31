import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAG = {
  _style:
    'dashed=0;html=1;fillColor=#F0F2F5;strokeColor=none;align=center;rounded=1;arcSize=10;fontColor=#596780;fontStyle=1;fontSize=11;shadow=0',
  _width: 60,
  _height: 20,
}

export function Tag(props: DiagramNodeProps) {
  return <Shape {...TAG} {...props} _style={extendStyle(TAG, props)} />
}
