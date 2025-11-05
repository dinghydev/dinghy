import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_SPLITTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.splitter;strokeColor=#999999;',
  },
  _width: 350,
  _height: 10,
}

export function HorizontalSplitter(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_SPLITTER}
      {...props}
      _style={extendStyle(HORIZONTAL_SPLITTER, props)}
    />
  )
}
