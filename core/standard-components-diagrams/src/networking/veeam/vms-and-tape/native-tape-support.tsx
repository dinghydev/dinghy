import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NATIVE_TAPE_SUPPORT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.native_tape_support;',
  _width: 44.8,
  _height: 44.8,
}

export function NativeTapeSupport(props: DiagramNodeProps) {
  return <Shape {...NATIVE_TAPE_SUPPORT} {...props} />
}
