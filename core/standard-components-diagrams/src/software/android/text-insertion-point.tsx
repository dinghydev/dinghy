import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXT_INSERTION_POINT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.text_insertion_point;',
  _width: 20,
  _height: 30,
}

export function TextInsertionPoint(props: DiagramNodeProps) {
  return <Shape {...TEXT_INSERTION_POINT} {...props} />
}
