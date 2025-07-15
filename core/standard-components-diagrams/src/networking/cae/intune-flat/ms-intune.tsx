import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MS_INTUNE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.microsoft_intune',
  _width: 50,
  _height: 40,
}

export function MsIntune(props: DiagramNodeProps) {
  return <Shape {...MS_INTUNE} {...props} />
}
