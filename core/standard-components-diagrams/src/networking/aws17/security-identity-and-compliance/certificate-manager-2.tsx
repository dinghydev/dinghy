import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE_MANAGER_2 = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.certificate_manager_2;fillColor=#759C3E;gradientColor=none;',
  _width: 73.5,
  _height: 63,
}

export function CertificateManager2(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE_MANAGER_2} {...props} />
}
