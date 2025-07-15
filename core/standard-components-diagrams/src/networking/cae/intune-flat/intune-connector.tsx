import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTUNE_CONNECTOR = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_connector',
  _width: 82,
  _height: 59,
}

export function IntuneConnector(props: DiagramNodeProps) {
  return <Shape {...INTUNE_CONNECTOR} {...props} />
}
