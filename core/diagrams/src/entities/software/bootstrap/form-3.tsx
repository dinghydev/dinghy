import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORM_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;spacing=2;fontSize=12;fontColor=#999999;',
  },
  _width: 2,
  _height: 500,
}

export function Form3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FORM_3)} />
}
