import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATE_PICKER_4 = {
  _style:
    'shape=mxgraph.mockup.forms.rrect;rSize=5;strokeColor=#DFE1E5;fillColor=#ffffff;shadow=1',
  _width: 2,
  _height: 415,
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
