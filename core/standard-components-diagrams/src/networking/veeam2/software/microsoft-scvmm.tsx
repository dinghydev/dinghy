import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MICROSOFT_SCVMM = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.microsoft_scvmm;',
  _width: 34,
  _height: 34,
}

export function MicrosoftScvmm(props: DiagramNodeProps) {
  return <Shape {...MICROSOFT_SCVMM} {...props} />
}
