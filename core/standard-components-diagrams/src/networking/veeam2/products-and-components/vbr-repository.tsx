import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VBR_REPOSITORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbr_repository;',
  _width: 37,
  _height: 38,
}

export function VbrRepository(props: DiagramNodeProps) {
  return <Shape {...VBR_REPOSITORY} {...props} />
}
