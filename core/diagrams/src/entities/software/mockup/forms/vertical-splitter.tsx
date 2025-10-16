import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_SPLITTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.splitter;strokeColor=#999999;direction=north;',
  },
  _width: 10,
  _height: 350,
}

export function VerticalSplitter(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_SPLITTER}
      {...props}
      _style={extendStyle(VERTICAL_SPLITTER, props)}
    />
  )
}
