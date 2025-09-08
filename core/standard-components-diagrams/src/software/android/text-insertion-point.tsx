import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT_INSERTION_POINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.text_insertion_point;',
  },
  _original_width: 20,
  _original_height: 30,
}

export function TextInsertionPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_INSERTION_POINT}
      {...props}
      _style={extendStyle(TEXT_INSERTION_POINT, props)}
    />
  )
}
