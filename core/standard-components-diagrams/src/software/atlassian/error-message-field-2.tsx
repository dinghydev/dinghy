import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ERROR_MESSAGE_FIELD_2 = {
  _style:
    'rounded=1;arcSize=9;align=center;strokeColor=#DFE1E5;html=1;strokeWidth=1;fontSize=12;shadow=1',
  _width: 2,
  _height: 68,
}

export function ErrorMessageField2(props: DiagramNodeProps) {
  return <Shape {...ERROR_MESSAGE_FIELD_2} {...props} />
}
