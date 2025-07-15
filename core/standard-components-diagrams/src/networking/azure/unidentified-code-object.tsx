import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIDENTIFIED_CODE_OBJECT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.unidentified_code_object;',
  _width: 50,
  _height: 42.5,
}

export function UnidentifiedCodeObject(props: DiagramNodeProps) {
  return <Shape {...UNIDENTIFIED_CODE_OBJECT} {...props} />
}
