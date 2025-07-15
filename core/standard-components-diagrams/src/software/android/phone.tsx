import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHONE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.phone2;strokeColor=#c0c0c0;',
  _width: 200,
  _height: 390,
}

export function Phone(props: DiagramNodeProps) {
  return <Shape {...PHONE} {...props} />
}
