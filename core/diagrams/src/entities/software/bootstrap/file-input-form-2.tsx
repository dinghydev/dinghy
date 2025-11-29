import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILE_INPUT_FORM_2 = {
  _style: {
    entity: 'fillColor=none;strokeColor=none;align=left;fontSize=14;spacing=5;',
  },
  _width: 2,
  _height: 70,
}

export function FileInputForm2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FILE_INPUT_FORM_2)} />
}
