import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT_SELECTION_HANDLES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.textSelHandles;fillColor=#33b5e5;strokeColor=#0099cc;',
  },
  _width: 168.8,
  _height: 42.2,
}

export function TextSelectionHandles(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_SELECTION_HANDLES}
      {...props}
      _style={extendStyle(TEXT_SELECTION_HANDLES, props)}
    />
  )
}
