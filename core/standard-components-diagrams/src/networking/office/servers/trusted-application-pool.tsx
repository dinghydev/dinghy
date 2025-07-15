import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRUSTED_APPLICATION_POOL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.trusted_application_pool;',
  _width: 59,
  _height: 59,
}

export function TrustedApplicationPool(props: DiagramNodeProps) {
  return <Shape {...TRUSTED_APPLICATION_POOL} {...props} />
}
