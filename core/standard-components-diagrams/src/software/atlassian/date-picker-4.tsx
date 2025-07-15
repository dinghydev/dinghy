import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATE_PICKER_4 = {
  _style:
    'shape=mxgraph.mockup.forms.rrect;rSize=5;strokeColor=#DFE1E5;fillColor=#ffffff;shadow=1',
  _width: 2,
  _height: 415,
}

export function DatePicker4(props: DiagramNodeProps) {
  return <Shape {...DATE_PICKER_4} {...props} />
}
