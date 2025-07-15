import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECONDARY_SITE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.secondary_site',
  _width: 41,
  _height: 50,
}

export function SecondarySite(props: DiagramNodeProps) {
  return <Shape {...SECONDARY_SITE} {...props} />
}
