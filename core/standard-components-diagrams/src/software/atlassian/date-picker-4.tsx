import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATE_PICKER_4 = {
  _style: {
    entity:
      'shape=mxgraph.mockup.forms.rrect;rSize=5;strokeColor=#DFE1E5;fillColor=#ffffff;shadow=1',
  },
  _original_width: 2,
  _original_height: 415,
}

export function DatePicker4(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATE_PICKER_4}
      {...props}
      _style={extendStyle(DATE_PICKER_4, props)}
    />
  )
}
