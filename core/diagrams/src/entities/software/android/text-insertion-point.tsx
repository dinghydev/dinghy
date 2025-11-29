import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_INSERTION_POINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.text_insertion_point;',
  },
  _width: 20,
  _height: 30,
}

export function TextInsertionPoint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEXT_INSERTION_POINT)} />
}
