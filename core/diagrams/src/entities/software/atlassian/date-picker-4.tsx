import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER_4 = {
  _style: {
    entity:
      'shape=mxgraph.mockup.forms.rrect;rSize=5;strokeColor=#DFE1E5;fillColor=#ffffff;shadow=1',
  },
  _width: 2,
  _height: 415,
}

export function DatePicker4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATE_PICKER_4)} />
}
